# Stock Trainer

Welcome to our application that teaches and guides you on trading stocks.

## Team

| Andrew McLaughlin                                                                                                                          | Haywood D. Johnson                                                                                                                                   | Jennifer Player                                                                                                                                    | Jun Kim                                                                                                                             | Punit Rawal                                                                                                                                   | Tylar Pierson                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Pic here                                                                                                                                   | Pic here                                                                                                                                             | Pic here                                                                                                                                           | Pic here                                                                                                                            | Pic here                                                                                                                                      | Pic here                                                                                                                                         |
| [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/LaikaFusion)                                             | [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/LordOrbnauticus)                                                   | [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/chainchompa)                                                     | [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/junhyukee)                                        | [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/rawalpunit)                                                 | [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/tylarpierson)                                                  |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> LinkedIn](https://www.linkedin.com/in/andrewbmclaughlin/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> LinkedIn](https://www.linkedin.com/in/haywood-d-johnson-2ba181121/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> LinkedIn](https://www.linkedin.com/in/jennifer-player-92a6a5153/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> LinkedIn](https://www.linkedin.com/in/junhyukkim/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> LinkedIn](https://www.linkedin.com/in/punit-rawal-b7012123/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> LinkedIn](https://www.linkedin.com/in/tylar-pierson-370916166/) |

# Table of Contents

- [Test the Site](#test-the-site)
- [Styling Guidelines](#styling-guidelines)
- [Tech-Stack](#tech-stack)
  - [Front-End Dependencies (Production)](#front-end-dependencies-production)
    - [React](#react)
    - [React Router](#react-router)
    - [Axios](#axios)
    - [Semantic UI](#semantic-ui)
    - [Victory](#victory)
    - [React Slick](#react-slick)
    - [Auth0](#auth0)
  - [Front-End Dependencies (Development)](#front-end-dependencies-development)
    - [ESLint](#eslint)
    - [Prettier](#prettier)
  - [Back-End Dependencies (Production)](#back-end-dependencies-production)
    - [Django](#django)
    - [Django Coverage](#django-coverage)
    - [Python-decouple](#python-decouple)
    - [Djangorestframework](#djangorestframework)
    - [Django-cors-headers](#djangocorsheaders)
    - [Whitenoise](#whitenoise)
    - [Gunicorn](#gunicorn)
    - [Pyjwt](#pyjwt)
    - [Python-jose](#python-jose)
    - [Psycopg2-binary](#psycopg2-binary)
    - [Dj-database-url](#dj-database-url)
    - [Cryptography](#cryptography)
  - [Back-End Dependencies (Development)](#back-end-dependencies-development)
    - [pylint](#pylint)
    - [autopep8](#autopep8)
- [API Documentation](#api-documentation)
  - [Third-Party APIs](#third-party-apis)
    - [Stripe](#stripe)
    - [Quantopian](#quantopian)
  - [Backend API](#backend-api)

## Test the Site

Start by cloning the repository to your local machine. Once cloned `cd` into the folder and open it in your preferred editor of choice.
The Front End of the app will be located on `localhost:3000`.
The Back End of the app will be located on `127.0.0.1/8000`.

### Front End
Once you are in the project folder `cd` into `stockTrainerFrontend` and `yarn install` to install all of the dependencies in `package.json`.
Once everything has install run `yarn start` to get the project up and running on `localhost:3000`.

### Back End Prerequities
You will need Django installed for this project. Please see https://www.djangoproject.com/download/ for a guide to installing it on your system.

This project uses PEP8 as a style guide.

### Back End
It's time to get the server running locally. Open a new terminal window and `cd` into `stockTrainerBackEnd`. Most Django projects live within a virtual environment. The choices are typically, VirtualEnv or Pipenv. This project uses Pipenv. Invoke it by typing:
`pipenv shell`

To download all dependencies type:
`pipenv install`

To be able to log into the admin interface type: 
`python manage.py createsuperuser `
and follow the prompts.

To scaffold the structure of tables, within Models.py, on the DB type:
`python manage.py makemigrations`

To make the tables and DB type:
`python manage.py migrate`

To run the server locally on `127.0.0.1/8000` type:
`python manage.py runserver`
append `admin` to the above local browser to log in and see your DB.


## Styling Guidelines

The JavaScript code follows [Airbnb's Javascript Style Guide](https://github.com/airbnb/javascript) and is integrated via ESLint and Prettier.

The Python code follows [Pep 8 Style Guide](https://www.python.org/dev/peps/pep-0008/) and is integrated via \_\_\_\_

# Tech Stack

## Front-End Dependencies Production

### React

A JavaScript library that allows users to create user interfaces. React has a large community
 and is a highly scalable library for any modern web application. | [View Dependency](https://reactjs.org/)

### React Router

A powerful collection of navigational components that allows developers to create single
page applications by utilizing the components provided. | [View Dependency](https://reacttraining.com/react-router/)

### Axios

A library that helped us make XMLHttpRequests from our React application. It supports
the Promise API, and so allows us to use the power of Promises. | [View Dependency](https://github.com/axios/axios)

### Semantic UI

A styling library used to quickly build elegant layouts and components. | [View Dependency](https://react.semantic-ui.com/)

### Victory

An opinionated collection of React Components used for data visualization. | [View Dependency](https://formidable.com/open-source/victory/)

### React Slick

A complex, yet easy to use library for custom carousels. | [View Dependency](https://react-slick.neostack.com/)

### Auth0

An OAuth (Open Authorization) platform to help users login using their accounts from third party
websites. | [View Dependency](https://auth0.com/)

## Front-End Dependencies Development

### ESLint

Linting tool utilized to keep consistent styling throughout members of the team. | [View Dependency](https://eslint.org/)

### Prettier

An opinionated code formatter that formats code. Project integrated ESLint configurations
to work with Prettier. | [View Dependency](https://prettier.io/)

## Back-End Dependencies Production

### Django

An opinionated high-level Python Web framework that allows for super quick development of 
a web server. | [View Dependency](https://www.djangoproject.com/)

### Django Coverage

Tool to help test Django and Python code. | [View Dependency](https://pypi.org/project/django-coverage/)

### Python-decouple

Helps utilize environment variables throughout the Django application. | [View Dependency](https://pypi.org/project/python-decouple/)

### Djangorestframework

Powerful toolkit to assist building RESTful APIs. | [View Dependency](https://www.django-rest-framework.org/)

### Django-cors-headers

Django application that adds CORS headers to responses. | [View Dependency](https://pypi.org/project/django-cors-headers/)

### Whitenoise

Django application that allows the application to server its own static files. | [View Dependency](http://whitenoise.evans.io/en/stable/)

### Gunicorn

A Python WSGI HTTP Server used on Heroku. | [View Dependency](https://gunicorn.org/)

### Pyjwt

Library to help read and decode JWTs (JSON Web Tokens). | [View Dependency](https://pyjwt.readthedocs.io/en/latest/)

### Python-jose

Library used alongside Pyjwt to help encrypt/sign JWTs. | [View Dependency](https://github.com/mpdavis/python-jose)

### Psycopg2-binary

PostgreSQL adapter for Python. | [View Dependency](https://pypi.org/project/psycopg2-binary/)

### Dj-database-url

Allows Django apps to use Database URLs. | [View Dependency](https://github.com/kennethreitz/dj-database-url)

### Cryptography

Used alongside Pyjwt and Jose to encrypt. | [View Dependency](https://cryptography.io/en/latest/)

## Back-End Dependencies Development

### Pylint

Allows for consistent styling in code contributed by different team members.

### Autopep8

# API Documentation

## Third-Party APIs

### Stripe

Payment toolkit that allows for secure payments for users. | [View API](https://stripe.com/)

##### Implementation:

The front-end uses the Stripe element and components to get user info, and then the Stripe 
component creates a secure token that is sent to the back-end. The back-end receives this
token, and sends a request to the Stripe server for payment. Depending on the result of the
payment, user account status may be upgraded, or there may be further steps to complete
payment. 

### Quantopian
