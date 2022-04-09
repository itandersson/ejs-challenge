var express = require('express');
var router = express.Router();

const appRoot = process.cwd();
const Post = require(appRoot + '/models/postModel');

/**
   * Checks if an post is already stored in the database 
   *
   * @param p_title String
   * @param p_arr Array
   * @returns Return an array with the contents of an post object or the text No match
   */
 function setResponse(p_string, p_arr) {
  let response = [];

  //Check if the title is in the array 
   const match = findMatch(p_string, p_arr)

   //If title exist
   if (match) {
     response[0] = match[0];
     response[1] = match[1];
    }
    else {
      response[0] = "No match!";
      response[1] = "";
    }

    return response;
 }

/**
   * Checks if there is a match in a array
   *
   * @param p_title String to search for in the array
   * @param p_arr Array filled with post objects
   * @returns Return an array or false if no match were found
   */
function findMatch(p_title, p_arr) {
  let res = false;
  for (let index = 0; index < p_arr.length; index++) {
    const post = p_arr[index];
    if ( post.title === p_title ) { 
      res = [];
      res[0] = p_title;
      res[1] = post.text;
    }
  }
  return res;
}

router.get('/', (req, res) => {
  res.redirect('/')
})

router.get('/:param', (req, res) => {

  const title = req.params.param;

  Post.find(function (err, post) {
    if (!err) {
      let response = setResponse(title, post);
      res.render('post', {
        title: response[0],
        text: response[1]
      });
    }
  });
})
 
  module.exports = router;