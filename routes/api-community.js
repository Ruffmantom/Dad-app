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


});

// route for getting all the moments from the moments table
router.get('/community', (req, res) =>
    db.Moments.findAll({ raw: true, order: [['updatedAt', 'DESC']] })
        .then(momentTable => {
            console.log(momentTable);
            res.render('community', {
                momentTable
            });
        })
        .catch(err => console.log(err)));


// route for posting api-jokes
router.post("/api/jokes", (req, res) => {
    var joke = req.body.joke;
    var username = req.body.username;
    db.Jokes.create({ jokes: joke })
        .then(function () {
            res.status(201).json({
                message: "joke was posted!"
            })
        })
})
// route for getting api-jokes
router.get("/api/jokes", (req, res) => {
    res.json({
        message: "get worked!"
    })
})

module.exports = router;