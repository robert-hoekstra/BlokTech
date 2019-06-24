// load Express
const express = require('express');
// load body-parser
const bodyParser = require('body-parser');
// Init App 
const app = express();
// set DB structure
const mongoose = require('mongoose');
const session = require('express-session');

mongoose.connect('mongodb://localhost:27017/lcw1');
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
    cookie: { secure: true }
}));



//Bring in Models
let Member = require('./models/member.js')
let User = require('./models/users.js')

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


// add registering profile to db
app.post('/register', function(req, res){
    console.log('Submitted');
    let member = new Member();
    member.username = req.body.username;
    member.password = req.body.password;
    member.firstName = req.body.firstName;
    member.lastName = req.body.lastName;
    member.age = req.body.age;
    member.gender = req.body.gender;
    member.height = req.body.height;
    member.weight = req.body.weight;

    member.save(function(err){
        if(err){
            console.log(err);
            return;
        } else {
            res.redirect('/');
        }
    })
    console.log(req.body.title);
})


//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
    res.status(404);
    res.render('pages/404');
  });
// Start Server on port 8080

app.listen(8080);
console.log('Speak 8080 and enter.');