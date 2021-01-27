# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# LML PRODUCTION BACKEND

Please refer to [LML PRODUCTIONS BACKEND](https://github.com/atBeatty/lml_production_app)


## Install Instructions
The set up is quite simple. It is important to note the order of starting the back-end _before_ the the front-end.


1. Clone both repos.
1. Open both repos.
1. In the terminal for the <backend> Rails directory, type in the following:
    ```
    rails db:reset
    rails s
    ```
1. In the terminal for the <frontend> React directory, type in the following:
    ```
    npm start
    ```
1. It will prompt you to use a different portal because localhost:3000 is already in use. Hit enter or y to continue. This will bring up a browser with the App page rendered!

## Basic User Flow
Currently, the app allows a user to create productions and create associated crews. The crew is built with a relationship to the crew_members table in order to to keep a nice separation of concerns, as well as useful information.

The future of this app will have functionality to populate invoices. These invoices will be tied to each crew, client, production, etc.
