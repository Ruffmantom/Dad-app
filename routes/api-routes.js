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
    res.json(req.user);
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
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
  // ============================================================================================
  // // GET route for getting all of the todos
  // app.get("/api/todos", function (req, res) {
  //   // findAll returns all entries for a table when used with no options
  //   db.Todo.findAll({}).then(function (dbTodo) {
  //     // We have access to the todos as an argument inside of the callback function
  //     res.json(dbTodo);
  //   });
  // });

  // // POST route for saving a new todo
  // app.post("/api/todos", function (req, res) {
  //   // create takes an argument of an object describing the item we want to
  //   // insert into our table. In this case we just we pass in an object with a text
  //   // and complete property (req.body)
  //   db.Todo.create({
  //     text: req.body.text,
  //     complete: req.body.complete
  //   }).then(function (dbTodo) {
  //     // We have access to the new todo as an argument inside of the callback function
  //     res.json(dbTodo);
  //   })
  //     .catch(function (err) {
  //       // Whenever a validation or flag fails, an error is thrown
  //       // We can "catch" the error to prevent it from being "thrown", which could crash our node app
  //       res.json(err);
  //     });
  // });


  // // PUT route for updating todos. We can get the updated todo data from req.body
  // app.put("/api/todos", function (req, res) {

  //   // Update takes in an object describing the properties we want to update, and
  //   // we use where to describe which objects we want to update
  //   db.Todo.update({
  //     text: req.body.text,
  //     complete: req.body.complete
  //   }, {
  //     where: {
  //       id: req.body.id
  //     }
  //   }).then(function (dbTodo) {
  //     res.json(dbTodo);
  //   })
  //     .catch(function (err) {
  //       // Whenever a validation or flag fails, an error is thrown
  //       // We can "catch" the error to prevent it from being "thrown", which could crash our node app
  //       res.json(err);
  //     });
  // });
};
