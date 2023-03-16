const User = require('./User');
const Comment = require('./Comment');

Comment.belongsTo(User, {
    foreignKey: 'user_id',
  });

  User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

  module.exports = {
    Comment,
    User
  };