const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post')

Comment.belongsTo(User, {
    foreignKey: 'user_id',
  });

  Comment.belongsTo(Post, {
    foreignKey: 'post_id', 
    onDelete: 'CASCADE',
  });

  User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

  User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

  Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
  });

  Post.belongsTo(User, {
    foreignKey: 'user_id',
  });

  module.exports = {
    Comment,
    User,
    Post
  };