var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();

var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')
// var env = require('dotenv').load();

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions



// Requiring our models for syncing
var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Set the routes for the db
require("./routes/api-routes.js")(app);
const communityRoutes = require("./routes/api-community");
app.use(communityRoutes);
// html routes
var routes = require("./routes/html-routes.js");
app.use(routes);



// Start our server so that it can begin listening to client requests.
// syncing our sequelize models and then starting our express app
// ==============================================================
db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        // Log (server-side) when our server has started
        console.log("Server listening on: http://localhost:" + PORT);
    });
})