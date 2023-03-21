const router = require('express').Router();
const { Post, User, Comments } = require('../models');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('onboarding', { 
      posts, 
      //logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
;

router.get('/login', (req, res) => {
   // If the user is already logged in, redirect the request to another route
   if (req.session.logged_in) {
      res.redirect('/homepage');
      return;
    }
    res.render('login');
  });

  router.get('/signup', (req, res) => {
    res.render('signup');
  });

  router.get('/homepage', (req, res) => {
    res.render('homepage');
  });

  router.get('/dashboard', (req, res) => {
    res.render('dashboard');
  });



  module.exports = router;