const router = require('express').Router();
const { Comment, Post } = require('../../models');
const withAuth = require('../../utils/auth')

router.post('/post/:id', withAuth, async (req, res) => {
    try {
      const comment = await Comment.create({
        ...req.body, 
        user_id: req.session.user_id
      });
      res.status(200).json(comment)
      return res.status(201).json()
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  })

  router.post('/', withAuth, async (req, res) => {
    try {
      const newPost = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      console.log(newPost);
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;