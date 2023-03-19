const router = require('express').Router();
//const { Project, User } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage');
  });

router.get('/login', (req, res) => {
   // If the user is already logged in, redirect the request to another route
   if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
    res.render('login');
  });

  router.get('/signup', (req, res) => {
    res.render('signup');
  });
  
  router.get('/dashboard', (req, res) => {
    res.render('dashboard');
  });

  module.exports = router;