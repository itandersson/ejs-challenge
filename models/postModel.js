const mongoose = require('mongoose');
const conn = mongoose.connect(process.env.CONNECTIONSTRING);

const Post = mongoose.model('Post', { title: String, text: String });

module.exports = Post;