const router = require('express').Router();
const { Comment } = require('../../models');
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

  module.exports = router;