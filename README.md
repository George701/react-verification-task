# react-verification-task
Simple react application with Express as a Server , which is using REST API

## Getting Started
After cloning this repository, make sure that port number 3001 is available. The reason why is that by default server uses this port.

In case port number 3001 is not available following changes must be done:

### Server
For Windows:
react-verification-task/package.json

```
"scripts": {
    "start": "set PORT={port number} && node bin/www"
  },
```

For Mac:
react-verification-task/package.json

```
"scripts": {
    "start": "PORT={port number} node bin/www"
  },
```

### React App
react-verification-task/tabernam/package.json
```
"proxy": "http://localhost:{port number}",
```

## Running App
Open two consoles that support npm.
In main directory run command in command line. Using following command start express server:
```
react-verification-task> npm start
```
Then directory should be changed to tabernam and using following command start react app:
```
react-verification-task\tabernam> npm start
```

## Description:

### Server side
Server has an endpoint `/products`, that could be found in following directory:
```
react-verification-task\routes\products.js
```
Each product is a data set, that includes following attributes:
* Image
* Title
* Price
* Color

`http://jsonplaceholder.typicode.com/` is used as one of the REST APIs

### Client Side
Following files are using `redux` and `axios` for connecting data and data-template for one logical unit:
* `react-verification-task\tabernam\store.js`
* `react-verification-task\tabernam\reducers\index.js`
* `react-verification-task\tabernam\reducers\commentReducer.js`
* `react-verification-task\tabernam\src\actions\types.js`
* `react-verification-task\tabernam\src\actions\commentActions.js`
* `react-verification-task\tabernam\src\elements\views\CommentList.js`
* `react-verification-task\tabernam\src\elements\views\Comment.js`


