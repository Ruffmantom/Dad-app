var express = require("express");

var router = express.Router();


var db = require("../models/index.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  res.render("index");
});
router.get("/jokes", function (req, res) {
  res.render("jokes");
});
router.get("/community", function (req, res) {
  res.render("community");
});
router.get("/profile", function (req, res) {
  res.render("profile");
});


// Export routes for server.js to use.
module.exports = router;
