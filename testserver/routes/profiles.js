const express = require('express');
const router = express.Router();


//Bring in Members Module
let User = require('../models/users.js');

/*
// profile page 
router.get('/', function(req, res) {
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
*/

// profile page Users
router.get('/', function(req, res) {
    User.find({}, function(err, users){
        if(err){
            console.log(err);
        } else {
            res.render('pages/profile', {
                users: users,
                title: users.title
            });
        }
    });
});

// Unique Member Page
router.get('/:id', function(req, res){
    User.findById(req.params.id, function(err, users){
        console.log(users);
        res.render('pages/uniqueprofile', {
            users: users
        })
    })
}) 
//Load Edit Form
router.get('/edit-profile/:id', function(req, res){
    User.findById(req.params.id, function(err, users){
        console.log(users);
        res.render('pages/edit-profile', {
            users: users
        })
    })
})
// Update Profile
router.post('/edit-profile/:id', function(req, res){
    console.log('Edit Form Submitted');
    let users = {};
    users.username = req.body.username;
    users.password = req.body.password;
    users.firstName = req.body.firstName;
    users.lastName = req.body.lastName;
    users.age = req.body.age;
    users.gender = req.body.gender;
    users.height = req.body.height;
    users.weight = req.body.weight;

    let query = {_id:req.params.id}

    User.update(query, users, function(err){
        if(err){
            console.log(err);
            return;
        } else {
            res.redirect('/');
        }
    })
    console.log(req.body.title);
})

// Delete profile using AJAX 
router.delete('/:id', function(req, res){
    let query = {_id:req.params.id}
    console.log(query);

    User.deleteOne(query, function(err){
        if(err){
            console.log(err);
        }
        res.status(200).send('Account removed from database');
    });
});

module.exports = router;