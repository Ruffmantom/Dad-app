// api routes for the community=====================================================


const express = require('express');
const router = express.Router();
const db = require("../models");

// router.post("/moments", function (req, res) {
//     console.log(req.body);
//     res.send("Post worked");
// })
// POST route for saving a new post
router.post("/api/moments", function (req, res) {
    var moment = req.body.moment;
    var userName = req.body.username;
    console.log(moment + "--------" + userName);
    db.Moments.create({ userName: userName, moments: moment })
        .then(function () {
            res.status(201).json({
                message: "Moment was posted!"
            })
        })
    db.Moments.findAll(function (data) {
        console.log("about to find all")
        var hbsObject = {
            momentsTable: data
        };
        console.log("------------- the hbsObject ----------");
        console.log(hbsObject);
        res.render("community", hbsObject);
    });
});
// route for getting all the moments from the moments table
router.get("/api/community", function (req, res) {
    var query = {};
    if (req.query.UserId) {
        query.UserId = req.query.UserId;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Moments.findAll({
        where: query,
        include: [db.User]
    }).then(function (dbPost) {
        res.json(dbPost);
    });
});


module.exports = router;