# Stock Trainer Front End

### Prerequisites

You will need yarn installed for this project. Please see (here)[https://yarnpkg.com/lang/en/docs/install/#windows-stable] for a guide to installing yarn on your system.

To ensure your coding style matches the rest of the project please make sure that (ESlint)[https://eslint.org/docs/user-guide/getting-started] is installed globally.

### Installing

The front end is made using (create-react-app)[https://github.com/facebook/create-react-app].

To install and run:

```
yarn install
```

then

```
yarn start
```

This will launch a devolpment server on port 3000.

### .env file fields

Create an .env file in the same level as this README

```
# blanks require your own key

REACT_APP_URL=http://localhost:3000/
REACT_APP_BACKEND_URL=http://127.0.0.1:8000/

# Stripe Test Keys
REACT_APP_STRIPE_SECRET_TEST_KEY =
REACT_APP_STRIPE_PUBLISHABLE_TEST_KEY =
```

Substitute the part after the equal sign on the second line with the url and port of your backend.

### Code Style

All styling is to match the [AirBnB style guidelines](https://github.com/airbnb/javascript). This should be automatically enforced via combination of ESlint and Prettier. Please ensure you have this combination working before pushing.

## Deployment

The front end is deployed via [Netlify](https://www.netlify.com/) from the master branch automatically. All pull requests are also automatically built under a test URL by Netlify. If the build is successful it will be recorded in the PR. Please do not approve code that does not pass these checks.

All setting for Netlify are to be set with the netlify.toml which is located in the root of this repository.

## Built With

- [React](https://reactjs.org/) - Framework
- [React Router ](https://reacttraining.com/react-router/) - Routing
- [Semantic UI React](https://react.semantic-ui.com/) - UI Component Framework
- [Stripe](https://stripe.com/docs) - Payment Processor
- [Auth0](https://auth0.com/) - Authentication Library

## License

TODO
