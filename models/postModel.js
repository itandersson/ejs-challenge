const mongoose = require('mongoose');

var options = {
  useMongoClient: true,
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  //serverApi: ServerApiVersion.v1
};

var options2 = {
  //useMongoClient: true,
  useNewUrlParser: true, 
  useUnifiedTopology: true
};

/*
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://herokuapp:h5hMoXiYrpnU9k3r@cluster0.tuosg.mongodb.net/post?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/

const username = "herokuapp";
const password = "h5hMoXiYrpnU9k3r";
const cluster = "cluster0.tuosg";
const dbname = "post";
const uri = "mongodb+srv://" + username + ":" + password + "@" + cluster + ".mongodb.net/" + dbname + "?retryWrites=true&w=majority";
const uri2 = "mongodb+srv://herokuapp:h5hMoXiYrpnU9k3r@cluster0.tuosg.mongodb.net/post?retryWrites=true&w=majority";

/*
mongoose.connect(
  "mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);
*/

const conn = mongoose.connect(uri);





const Post = mongoose.model('Post', { title: String, text: String });

module.exports = Post;