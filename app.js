//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

var homeRouter = require('./routes/homeRoute');
var aboutRouter = require('./routes/aboutRoute');
var contactRouter = require('./routes/contactRoute');
var composeRouter = require('./routes/composeRoute');
var postRouter = require('./routes/postRoute');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');
app.locals._ = _;

app.use('/', homeRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/compose', composeRouter);
app.use('/post', postRouter);

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
