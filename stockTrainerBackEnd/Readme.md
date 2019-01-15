# Stock Trainer Back End



### Prerequisites

You will need Django installed for this project. Please see https://www.djangoproject.com/download/ for a guide to installing it on your system.

This project uses PEP8 as a style guide via VSCode.

### Installing

Most Django projects live within a virtual environment. The choices mainly are VirtualEnv and Pipenv. This project uses Pipenv. Invoke it by navigatign to the appropriate folder and typing:

```pipenv shell```

To install and run:
```
pip install Django>2.0
```
for fresh projects, For an existing project, simply type:```

```pipenv install```

This will launch a devolpment server on 127.0.0.1/8000.

### .env file fields
TODO 

### Code Style

All styling is to match the [AirBnB style guidelines](https://github.com/airbnb/javascript). This should be automatically enforced via combination of ESlint and Prettier. Please ensure you have this combination working before pushing.

## Deployment

The front end is deployed via [Netlify](https://www.netlify.com/) from the master branch automatically. All pull requests are also automatically built under a test URL by Netlify. If the build is successful it will be recorded in the PR. Please do not approve code that does not pass these checks. 

All setting for Netlify are to be set with the netlify.toml which is located in the root of this repository. 

## Built With

* [React](https://reactjs.org/) - Framework
* [React Router ](https://reacttraining.com/react-router/) - Routing
* [Semantic UI React](https://react.semantic-ui.com/) - UI Component Framework
* [Stripe](https://stripe.com/docs) - Payment Processor
* [Auth0](https://auth0.com/) - Authentication Library

## License

TODO
