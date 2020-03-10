// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Requiring our models
var db = require("../models");
var passport = require("../config/passport");

// Routes
// =============================================================
module.exports = function (app) {
  // code from 14-homework for validating the hashed password
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.User);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    console.log(req.body);
    db.User.create({
      name: req.body.name,
      userName: req.body.userName,
      password: req.body.password
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
    // console.log("route worked");
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
    console.log("logged out")
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/userprofile", function (req, res) {
    if (!req.User) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {

      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        userName: req.User.userName,
        id: req.User.id
      });
    }
  });

};
