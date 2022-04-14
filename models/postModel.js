const mongoose = require('mongoose');
const conn = mongoose.connect('mongodb+srv://ejschallenge:PsPwW4mzMnSjFJFO@cluster0.tuosg.mongodb.net/post?retryWrites=true&w=majority');

const Post = mongoose.model('Post', { title: String, text: String });

module.exports = Post;