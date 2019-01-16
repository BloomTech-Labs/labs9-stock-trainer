# Stock Trainer Back End



### Prerequisites

You will need Django installed for this project. Please see https://www.djangoproject.com/download/ for a guide to installing it on your syst

This project uses PEP8 as a style guide via VSCode.

### Installing

Most Django projects live within a virtual environment. The choices are typically, VirtualEnv or Pipenv. This project uses Pipenv. Invoke it by navigating to your project root folder (where manage.py is) and typing:

```pipenv shell```

To install Django:

```pip install Django>2.0```

for fresh projects. For an existing project, simply type:

```pipenv install```

This will download all dependencies already installed.

To be able to log in to the admin interface:

```python manage.py createsuperuser```

and follow the prompts. To scaffold the structure of tables, within Models.py, on the DB:

```python manage.py makemigrations```

To actually make the tables and DB:

```python manage.py migrate```

To run the server and see your project on local host:

```python manage.py runserver```

This will 'publish' the project on your local browser at '127.0.0.1/8000'. To log in and view your DB just append '/admin'



This is what the models and consequently, the DB is structured as, for this project:

```
User Model:
    username -       Character field for the Username adopted by the user
    firstname  -     Chatacter field for the First name of the user
    lastname -       Chatacter field for the Last name of the user
    study_name -     Character field for the name of the study that user has saved
    portfolio_name - Character filed for the name of the Portfolio saved by user.
                     A portfolio holds the user's studies.
```

```
Study Model:
    (A study is a combination of a Stock name, a date range and indicators with attendant parameters.)

    study_name -     Character field for the name of the study that user has saved
    stock_name -     Character field for the name of the stock
    indicator_name - Character field for the name of the indicator
    start_date -     Date Field
    end_date -       Date Field
```

```
Portfolio Model:
    portfolio_name - Character field for the name of the portfolio
    study_name -     Character field for the name of the study (in portfolio)
```

```
Stock Model:
    symbol - Character field to store the symbol for the Stock. E.g AMZN
    name -   Character field to store the name of the stock. E.g Amazon
    price -  Numric field. Currently only stores the closing price. WIP
```

```
Indicator Model:
    indicator_name -   Character field for the name of the indicator
    Indicator_params - Numeric field for the Indicator parameters. WIP
```




## Deployment

## Built With

## License


