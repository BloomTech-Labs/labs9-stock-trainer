# Stock Trainer Back End

### Prerequisites

You will need Django installed for this project. Please see https://www.djangoproject.com/download/ for a guide to installing it on your syst

This project uses PEP8 as a style guide.

### Installing

Most Django projects live within a virtual environment. The choices are typically, VirtualEnv or Pipenv. This project uses Pipenv. Invoke it by navigating to your project root folder (where manage.py is) and typing:

`pipenv shell`

To install all dependencies, type:

`pipenv install`

This will download all dependencies required by the pipfile.

To be able to log in to the admin interface:

`python manage.py createsuperuser`

To run the migrations in `stockTrainerApp/migrations/`, run:

`python manage.py migrate`

To run the server and see your project on local host:

`python manage.py runserver`

Visit `localhost:8000`. To log in and view your DB just append `/admin`

This is what the models and consequently, the DB is structured as:

```
User Model:
    username -       Character field for the username determined by Auth0
    portfolio_id -   Foreign key to a portfolio.
                     A portfolio holds the user's studies.
    premium -        Boolean if user is premium or not
    favorites -      ManytoMany field connecting to favorites
```

```
Study Model:
    stock_name -     Foreign Key to stock symbol
    portfolio_id     Foreign Key to a portfolio
    start_date -     Date Field
    end_date -       Date Field
    data -           Text Field to hold stringified JSON data
```

```
Portfolio Model:
    id -             Primary key to identify portfolio
```

```
Stock Model:
    symbol - Character field to store the symbol for the Stock. E.g AMZN
    name -   Character field to store the name of the stock. E.g Amazon
```

### Endpoints

`/stocks/`

##### Authentication

Utilizes a JWT to identify the user.

##### Parameters

`NAME` - Name allows you to specify a stock to request as a stock symbol. This must be a string, must be all caps and it must be a valid stock symbol.

`STARTDATE` - Allows you to pick the start time of your stock information request. Must be in the format of a string in the YYYY-MM-DD format. If you only need one day of data set STARTDATE and ENDDATE to one day apart. It will give you data for ENDDATE's date. **WARNING**: This will not work for any time after about 3-01-18, which is also the default if a start date is not specified. Putting a start time later then an end time will end in a query error. There seems to be some weirdness when you use the same start and end date. It sometimes will give you that days data (see 03-01-18) but other times won't (see 01-01-17).

`ENDDATE` - Allows you to pick the start time of your stock information request. Must be in the format of a string in the YYYY-MM-DD format. If you only need one day of data set STARTDATE and ENDDATE to one day apart. . It will give you data for ENDDATE's date. **WARNING**: This will not work for any time after about 3-01-18, which is also the default if a start date is not specified. Putting a start time later then an end time will end in a query error. There seems to be some weirdness when you use the same start and end date. It sometimes will give you that days data (see 03-01-18) but other times won't (see 01-01-17).

`FIELDS` - This allows you to request data for return. There an option for everything the api provides by default. All options must be in a comma seperated string. **NOT AN ARRAY**.

Capitalization is irrelevent for options, they will all be converted to uppercase server side.

Options are:

- open
- close
- low
- high
- volume
- exdividend
- splitratio
- adjhigh
- adjlow
- adjopen
- adjclose
- adjvolume

##### Return Format

Data will be returned with a status code 200, in a json format.
Example:

```
{
    "symbol": "GOOG",
    "startDate": "2018-01-01",
    "endDate": "2018-01-02",
    "data": [
        {
            "date": "2018-01-02",
            "open": "1048.34",
            "close": "1065.0",
            "low": "1045.23",
            "high": "1066.94",
            "exdividend": "0.0",
            "volume": "1223114.0",
            "splitRatio": "1.0",
            "adjHigh": "1066.94",
            "adjOpen": "1048.34",
            "adjClose": "1065.0",
            "adjLow": "1045.23",
            "adjVolume": "1223114.0"
        }
    ]
}
```

`/current_user/`

_GET_

##### Authentication

The accessToken from the frontend should be attached as an authentication token. This
will allow for our server to correctly identify the user, and return the user's
information. Make sure to attach the token to the header before making the request.

##### Parameters

The server is expecting a JWT token in the header.

##### Return Format

Data will be returned with a status code 200, in a json format.
Example:

```
{
    "favorites": [
        "AAPL",
        "AMZN"
    ]
}
```

`/favorite/`

_POST_

##### Authentication

The accessToken from the frontend should be attached as an authentication token. This
will allow for our server to correctly identify the user, and add the favorite to the
user. Make sure to attach the token to the header before making the request.

##### Parameters

The server is expecting a JSON body with a key of symbol. It should look like this:

```
{
  "symbol": "AMZN"
}
```

##### Return Format

Data will be returned with a status code 200, in a json format.
Example:

```
{
    "favorites": [
        "AAPL",
        "AMZN"
    ]
}
```

_DELETE_

##### Authentication

The accessToken from the frontend should be attached as an authentication token. This
will allow for our server to correctly identify the user, and delete the favorite from the
user's favorite list. Make sure to attach the token to the header before making the request.

##### Parameters

The server is expecting a JSON body with a key of symbol. It should look like this:

```
{
  "symbol": "AMZN"
}
```

##### Return Format

Data will be returned with a status code 200, in a json format.
Example:

```
{
    "favorites": [
        "AAPL"
    ]
}
```

### Code Style

Our project uses the [PEP 8 Style Guide](https://www.python.org/dev/peps/pep-0008/). Please make sure your code follows
the guidelines by using an environment such as Pycharm, or using a plugin such as Pylint for VSCode.

## Deployment

The back-end is deployed via [Heroku](https://backend-stock-trainer.herokuapp.com/) and is continuously deployed from the master branch.
Our Heroku server uses a PostgreSQL database, whereas locally, for development, we are using SQLite3. Please don't forget
the environment/config variables while setting up for deployment.

## Built With

- [Django](https://www.djangoproject.com/) - Framework
- [Stripe](https://stripe.com/docs) - Payment Processor

## License
