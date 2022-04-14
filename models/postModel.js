const mongoose = require('mongoose');

const uri = "mongodb+srv://herokuapp:h5hMoXiYrpnU9k3r@cluster0.tuosg.mongodb.net/post?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const Post = mongoose.model('Post', { title: String, text: String });

module.exports = Post;