// load Express
const express = require('express');
// load body-parser]
const bodyParser = require('body-parser');
// Init App 
const app = express();
// set DB structure
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
const sessions = require('express-session');


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
app.use(sessions({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
}))


//Bring in Models
let Member = require('./models/member.js')

// Routes
// index page (home) 
app.get('/', function(req, res) {
    res.render('pages/index');
});
// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});
// contact page 
app.get('/contact', function(req, res) {
    res.render('pages/contact');
});
// register page 
app.get('/register', function(req, res) {
    res.render('pages/register');
});
// profile page 
app.get('/profile', function(req, res) {
    Member.find({}, function(err, members){
        if(err){
            console.log(err);
        } else {
            res.render('pages/profile', {
                members: members,
                title: members.title

            });
        }
    });
});
// Information page 
app.get('/information', function(req, res) {
    res.render('pages/information');
});
// Unique Member Page
app.get('/profile/:id', function(req, res){
    Member.findById(req.params.id, function(err, members){
        console.log(members);
        res.render('pages/uniqueprofile', {
            members: members
        })
    })
}) 
//Load Edit Form
app.get('/profile/edit-profile/:id', function(req, res){
    Member.findById(req.params.id, function(err, members){
        console.log(members);
        res.render('pages/edit-profile', {
            members: members
        })
    })
})
// Update Profile
app.post('/profile/edit-profile/:id', function(req, res){
    console.log('Edit Form Submitted');
    let member = {};
    member.username = req.body.username;
    member.firstName = req.body.firstName;
    member.lastName = req.body.lastName;
    member.age = req.body.age;
    member.gender = req.body.gender;
    member.height = req.body.height;
    member.weight = req.body.weight;

    let query = {_id:req.params.id}

    Member.update(query, member, function(err){
        if(err){
            console.log(err);
            return;
        } else {
            res.redirect('/');
        }
    })
    console.log(req.body.title);
})

// Delete profile
app.get('/profile/delete/:id', function (req, res) {
    let query = { _id: req.params.id };
    Member.remove(query, function (err) {
        if(err){
            console.log(err)
        }
      res.redirect('/');
    });
  });

// add registering profile to db
app.post('/register', function(req, res){
    console.log('Submitted');
    let member = new Member();
    member.username = req.body.username;
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
console.log('8080 is the magic port');