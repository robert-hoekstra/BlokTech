// load Express
const express = require('express');

// Init App 
const app = express();
// set DB structure
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
// load body-parser
const bodyParser = require('body-parser');
const config = require('./config/database')

mongoose.connect(config.database);
let db = mongoose.connection;
// Check for DB connection
db
.once('open', function(){
    console.log('Connected to MongoDB');
})
.on('error', function(){
    console.log(err);
});

// set the view engine to ejs
app.set('view engine', 'ejs');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// Set Static Folder to Public
app.use(express.static('static'))

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
    res.render('pages/index');
});


// register page 
app.get('/register', function(req, res) {
    res.render('pages/register');
});

// Route Files
let profiles = require('./routes/profiles');
let users = require('./routes/users');
app.use('/users', users);
app.use('/profile', profiles);


//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
    res.status(404);
    res.render('pages/404');
  });
// Start Server on port 8080

app.listen(8080);
console.log('Speak 8080 and enter.');