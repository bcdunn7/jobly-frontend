# Jobly React App

## Deployed Here:
[Surge Deployment](https://jobly-react-app.surge.sh/)

## Overview

This is a react app that allows a user to keep track of companies and jobs which they are interested in and have applied to. It's a simple app with user auth, a companies listing, job listing, company details page, and a profile page. It uses an api class to communicate with a backend that is already deployed here: [backend](https://jobly-react-app.herokuapp.com/).

## To Recreate
Require Tech: Node/npm

* Download/Clone Git and navigate to file

    ``` 
    $ git clone https://github.com/bcdunn7/jobly-frontend
    $ cd path-to-jobly-frontend
    ```

* Download dependencies

    ```
    $ npm install
    ```

* Start server with REACT_APP variable (_There is already a backend up and running, so you can run a local front end that is connected to the back end with this command:_)

    ```
    $ REACT_APP_BASE_URL=https://jobly-react-app.herokuapp.com npm start
    ```

* _Or feel free to run locally without backend connection: npm start_
* Navigate to server/localhost

### **Tech Used:**
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 
- React Router 
- Formik 
- MaterialUI 