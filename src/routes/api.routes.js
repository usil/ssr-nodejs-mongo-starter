const createRouter = require('express').Router;
const { check, validationResult } = require('express-validator');
const nameController = require('../controllers/name.controller.js');

const router = createRouter();

const generateRouter = (settings) => {
  router.post(
    '/login',
    [
      check('username', 'Min 3 characters').exists().isLength({ min: 3 }),
      check('password', 'Min 3 characters').exists().isLength({ min: 3 }),
    ],
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const alerts = errors.array();
        return res.render('login', { alerts });
      }
      if (
        settings.adminPassword === req.body.password &&
        req.body.username.toLowerCase() === 'admin'
      ) {
        return res.redirect('/dashboard');
      }
      return res.render('login', {
        alerts: [{ msg: 'Invalid password or username', param: '' }],
      });
    },
  );

  router.post('/name', nameController().saveName);

  return router;
};

module.exports = generateRouter;
