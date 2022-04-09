const mongoose = require('mongoose');
const conn = mongoose.connect('mongodb://localhost:27017/post');

const Post = mongoose.model('Post', { title: String, text: String });

module.exports = Post;