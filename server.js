// load Express
const express = require("express");
const port = process.env.PORT || 8080;
// Init App
const app = express();
// Init Dependencies
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const config = require("./config/database");
//Init Relative Path variable
const path = require("path");
// Passport Config
require("./config/passport")(passport);
// Route Files Catch everything on given route.
let profiles = require("./routes/profiles");
let users = require("./routes/users");

require("dotenv").config();
// Connect to online DB
mongoose.connect(
  "mongodb+srv://" +
    process.env.DB_USERNAME +
    ":" +
    process.env.DB_PASSWORD +
    "@" +
    process.env.DB_SERVER +
    "/" +
    process.env.DB_NAME +
    "?retry?Writes=true",
  { useNewUrlParser: true }
);

let db = mongoose.connection;
// Check for DB connection
db.once("open", function() {
  console.log("Connected to MongoDB");
}).on("error", function(err) {
  console.log(err);
});

app
  // set the view engine to ejs
  .set("views", __dirname + "/views/pages")
  .set("view engine", "ejs")
  // parse application/x-www-form-urlencoded
  .use(bodyParser.urlencoded({ extended: false }))
  // parse application/json
  .use(bodyParser.json())
  // Set Static Folder to Public
  .use(express.static(path.join(__dirname, "static")))
  // Express Session Middelware
  .use(
    session({
      secret: "keyboard cat",
      resave: true,
      saveUninitialized: true,
      cookie: { secure: false }
    })
  )
  // Passport Middleware
  .use(passport.initialize())
  .use(passport.session())

  // Routes
  // index page (home)
  .get("/", function(req, res) {
    res.render("index");
  })

  .get("*", function(req, res, next) {
    res.locals.user = req.user || null;
    console.log(res.locals.user);
    console.log(req.session.passport);
    next();
  })

  // Set routes with multiple other paths (to stop routception)
  .use("/users", users)
  .use("/profile", profiles)

  //The 404 Route
  .get("*", function(req, res) {
    res.status(404);
    res.render("404");
  })

  // Start Server on port 8080
  .listen(port);
console.log("Now listening on port: " + port);
