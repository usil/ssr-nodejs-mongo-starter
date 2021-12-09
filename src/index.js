require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const livereload = require('livereload');
const connectLiveReload = require('connect-livereload');
const publicRouter = require('./routes/public.routes.js');
const apiRouter = require('./routes/api.routes.js');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const EnvSettings = require('advanced-settings').EnvSettings;

const advancedSettings = new EnvSettings();

const settings = advancedSettings.loadJsonFileSync('settings.json', 'utf8');

const app = express();

const init = async () => {
  try {
    await mongoose.connect(settings.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected');

    //* Lives reload the browser only in development
    if (process.env.NODE_ENV === 'development') {
      const liveReloadServer = livereload.createServer();
      liveReloadServer.server.once('connection', () => {
        setTimeout(() => {
          liveReloadServer.refresh('/');
        }, 50);
      });
      app.use(connectLiveReload());
    }

    app.set('view engine', 'ejs');

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(
      morgan(':method :url :status :response-time ms - :res[content-length]'),
    );

    app.use(
      session({
        secret: settings.sessionSecret,
        resave: false,
        saveUninitialized: true,
        store: MongoStore.create({ mongoUrl: settings.mongoUrl }),
        cookie: {
          maxAge: 14 * 24 * 60 * 60, // = 14 days. Default
        },
      }),
    );

    app.use(express.static('public'));
    app.use('/', publicRouter);
    app.use('/api', apiRouter(settings));

    app.listen(settings.port, () =>
      console.log(`Go to: http://localhost:${settings.port}`),
    );
  } catch (error) {
    console.log(error);
  }
};

init();
