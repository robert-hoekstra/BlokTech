// load Express
const express = require('express');
const port = process.env.PORT || 8080;
// Init App 
const app = express();
// set DB structure
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
// load body-parser
const bodyParser = require('body-parser');
const config = require('./config/database');
const path = require('path');

require("dotenv").config();

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

console.log(db)

// Check for DB connection
db
.once('open', function(){
    console.log('Connected to MongoDB');
})
.on('error', function(err){
    console.log(err);
});

// set the view engine to ejs

app.set('views', __dirname + '/views/pages');
app.set('view engine', 'ejs');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// Set Static Folder to Public
app.use(express.static(path.join(__dirname, 'static')));

// Express Session Middelware
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// Passport Config
require('./config/passport')(passport);
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('*', function(req, res, next){
    res.locals.user = req.user || null;
    console.log(res.locals.user);
    console.log(req.session.passport);
    next();
});


// let Users = require('./models/users.js')

// Routes
// index page (home) 
app.get('/', function(req, res) {
    res.render('index');
});


// register page 
app.get('/register', function(req, res) {
    res.render('register');
});

// Route Files
let profiles = require('./routes/profiles');
let users = require('./routes/users');
app.use('/users', users);
app.use('/profile', profiles);


//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
    res.status(404);
    res.render('404');
  });
// Start Server on port 8080

app.listen(port);
console.log('Now listening on port: ' + port);