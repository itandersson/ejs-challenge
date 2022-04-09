var express = require('express');
var router = express.Router();

const appRoot = process.cwd();
const Post = require(appRoot + '/models/postModel');

const _ = require('lodash');

const { body, validationResult } = require('express-validator');

router.get('/', (req, res) => {
  res.render('compose');
})

router.post('/', 
  body('title').isLength({ max: 15 }).isAlphanumeric('sv-SE'),
  body('text').isLength({ max: 500 }).isAlphanumeric('sv-SE', {'ignore': ' -'}),
  (req, res) => {
  
  // Finds the validation errors in this request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const title = _.toLower(req.body.title);
  const text = req.body.text;
  
  Post.findOne({ title: title }, function (err, post) {
    if (err) { 
      console.log(err);
    } else if (post === null) {
      //Finns inte. Spara!!
      const myPost = new Post({ title, text });
      myPost.save().then(() => console.log(title + " Loggad"));
    } else {
      //Spara inte till databasen!
      console.log(post + " Finns redan i post!")
    }
  });

  res.redirect('/');
})

module.exports = router;