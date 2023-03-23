const router = require('express').Router();
const { Comment, Post } = require('../../models');
const withAuth = require('../../utils/auth')

router.post('/:id', withAuth, async (req, res) => {
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
  });

  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.put('/:id', withAuth, async (req, res) => {
    try {
      const postUpdate = await Post.update(
        { 
          post_title: req.body.post_title, // Update the post's title with the new value from the request body
          blog_text: req.body.blog_text // Update the post's content with the new value from the request body
        },
        { where: { id: req.params.id, user_id: req.session.user_id } } // Only update the post if it belongs to the authenticated user
      );

      if (!postUpdate) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
      
      if (postUpdate[0] === 0) { // If the post was not found or not updated
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
      
      res.status(200).json(postUpdate);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

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