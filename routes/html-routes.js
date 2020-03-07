var express = require("express");

var router = express.Router();
var isAuthenticated = require("../config/middleware/isAuthenticated");

// module.exports = function (app) {
// Create all our routes and set up logic within those routes where required.
// getting the sign up/ sign in page loaded up
router.get("/", function (req, res) {
  // console.log("working");
  res.render("index");

});
// get the jokes page
router.get("/jokes", function (req, res) {
  res.render("jokes");
});
// get the community page
router.get("/community", function (req, res) {
  res.render("community");
});
// get the user profile page
// if user has been made
// router.get("/", function (req, res) {
//   // If the user already has an account send them to the members page
//   if (req.user) {
//     res.redirect("/profile");
//   }
//   res.render("profile");
// });
// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
// router.get("/profile", isAuthenticated, function (req, res) {
//   res.render("profile");
// });

// };

//     res.render("index");
//   });

// router.post("/api/cats", function (req, res) {
//   cat.create(["name", "sleepy"], [req.body.name, req.body.sleepy], function (result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/api/cats/:id", function (req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update(
//     {
//       sleepy: req.body.sleepy
//     },
//     condition,
//     function (result) {
//       if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();

//     }
//   );
// });

// Export routes for server.js to use.
module.exports = router;