// load Express
var express = require('express');

// load body-parser]
const bodyParser = require('body-parser')


// Init App 
var app = express();

// set DB structure
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/lcw1');
let db = mongoose.connection;


// set the view engine to ejs
app.set('view engine', 'ejs');


// Check for DB connection
db.once('open', function(){
    console.log('Connected to MongoDB');

});
//Check for Db errors
db.on('error', function(){
    console.log(err);
});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Bring in Models
let Member = require('./models/member.js')

// index page 
app.get('/', function(req, res) {
    var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('pages/index', {
        drinks: drinks,
        tagline: tagline
    });
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

// 404
app.get('/profile', function(req, res) {
    res.render('pages/404');
});

// Information page 
app.get('/information', function(req, res) {
    res.render('pages/information');
});

// Unique Member Page
app.get('/profile/:id', function(req, res){
    Member.findById(req.params.id, function(err, members){
        console.log(members);
        return;
    })
})

// add registering profile to db
app.post('/register', function(req, res){
    console.log('Submitted');
    let member = new Member();
    member.username = req.body.username;
    member.firstName = req.body.firstName;
    member.lastName = req.body.lastName;
    member.age = req.body.age;
    member.gender = req.body.gender;

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
// Start Server on port 8080

app.listen(8080);
console.log('8080 is the magic port');