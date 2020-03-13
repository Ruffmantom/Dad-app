var express = require("express");
const db = require("../models");
var router = express.Router();
var isAuthenticated = require("../config/middleware/isAuthenticated");

// module.exports = function (app) {
// Create all our routes and set up logic within those routes where required.
// getting the sign up/ sign in page loaded up
router.get("/", function (req, res) {
  // If the user already has an account send them to the members page
  if (req.User) {
    res.render("profile");
  }
  res.render("index");

});
// get the jokes page
router.get("/jokes", function (req, res) {
  res.render("jokes");
});
// get the community page
// router.get("/community", function (req, res) {

//   res.render("community");
// });
// // getting all the data
// router.get("/api/moments", function (req, res) {

// });
// get the user profile page
// if user has been made
// here is the problem.. this route needs to be "login" like the hw from 14 but it only works when I use profile
router.get("/profile", function (req, res) {
  // If the user already has an account send them to the profile page
  if (req.user) {
    res.redirect("/profile");
  }
  res.render("profile");
});
// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
router.get("/profile", isAuthenticated, function (req, res) {
  res.render("profile");
});



module.exports = router;