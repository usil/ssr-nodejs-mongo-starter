# EJS and JQuery basic dashboard template v 1.0.0

Basic dashboard panel.

## Coverage

```text
Statements : 100%
Branches : 100%
Functions : 100%
Lines : 100%
```

## Technologies Used

- Nodejs >= 14
- MongoDB
- EJS
- JQuery
- Bootstrap

## Environment Variables

This template uses the following environment variables:

```text
PORT = 5000
MONGO_URL = mongodb://localhost:27017/Schelude?retryWrites=true&w=majority
MONGO_URL_TEST = mongodb://localhost:27017/NamesTest?retryWrites=true&w=majority
NODE_ENV = development
```

You can create a .env file to set those variables or use:

- On Linux:

```cmd
export PORT=5000
export MONGO_URL=mongodb://localhost:27017/Schelude?retryWrites=true&w=majority
export MONGO_URL_TEST=mongodb://localhost:27017/NamesTest?retryWrites=true&w=majority
export NODE_ENV=development
```

- On Windows:

```cmd
set PORT=5000
set MONGO_URL=mongodb://localhost:27017/Schelude?retryWrites=true&w=majority
set MONGO_URL_TEST=mongodb://localhost:27017/NamesTest?retryWrites=true&w=majority
set NODE_ENV=development
```

## Features

### Mongodb

This template has a mongodb connection ready, just use the env variable `MONGO_URL` to set your connection string. You can also use the template as a guide to create your mongoose schemas.

### Ejs

This template uses the basic template engine ejs, and also renders an ejs file inside other ejs file.

### JQuery

For scripting the client side the template uses [JQuery](https://jquery.com/), look for the `form.ejs` on how to use it.

### Advanced Settings

This template uses the [advanced-settings](https://github.com/usil/advanced-settings) library for environment and general configuration variables. Jus modify the `settings.json` file with your variables.

## For Development

Run `npm run dev` this will start the template with a watch over html, css, json and js files. Also will refresh the browser when changes are made.

## For Production

Run `npm start` and ensure to use an `NODE_ENV` variable set in `production`.

## Contributors

<table>
  <tbody>
    <td>
      <img src="https://i.ibb.co/88Tp6n5/Recurso-7.png" width="100px;"/>
      <br />
      <label><a href="https://github.com/TacEtarip">Luis Huertas</a></label>
      <br />
    </td>
    <td>
      <img src="https://avatars0.githubusercontent.com/u/3322836?s=460&v=4" width="100px;"/>
      <br />
      <label><a href="http://jrichardsz.github.io/">JRichardsz</a></label>
      <br />
    </td>
  </tbody>
</table>
