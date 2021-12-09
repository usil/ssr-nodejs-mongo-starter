const createRouter = require('express').Router;
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const router = createRouter();

router.get('/', (req, res) => {
  res.redirect('/login');
});

router.get('/login', (req, res) => {
  res.render('login');
});

const compiledHome = ejs.compile(
  fs.readFileSync(path.resolve(__dirname, '../../views/home.ejs'), 'utf8'),
);

const compiledForm = ejs.compile(
  fs.readFileSync(path.resolve(__dirname, '../../views/form.ejs'), 'utf8'),
);

//* here add the form modules

const homeEjs = compiledHome();
const formEjs = compiledForm();

router.get('/dashboard', (req, res) => {
  res.render('dashboard', { active: 'home', body: homeEjs });
});

router.get('/dashboard/form', (req, res) => {
  res.render('dashboard', { active: 'form', body: formEjs });
});

module.exports = router;
