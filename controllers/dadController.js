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
