const mongoose = require('mongoose');
const conn = mongoose.connect('mongodb://root:password@localhost:27017/post?authSource=admin');

const Post = mongoose.model('Post', { title: String, text: String });

module.exports = Post;