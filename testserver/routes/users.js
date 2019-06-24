const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const passport = require('passport')


//Bring in User Module
let User = require('../models/users');

// Register Form
router.get('/register', function(req, res){
    res.render('pages/register2');
})

// Register Process
router.post('/register2', function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    const email = req.body.email;
    
    let newUser = new User({
            username:username,
            password:password,
            name:name,
            email:email,
        });
        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(newUser.password, salt, function(err, hash){
                if(err){
                    console.log(err);
                }
                newUser.password = hash;
                newUser.save(function(err){
                    if(err){
                        console.log(err);
                        return;
                    } else {
                        console.log("logged in");
                        res.redirect('/users/login');
                    }
                })
            });
        });
    });
// Login Form
router.get('/login', function(req, res){
    res.render('pages/login');
})

// Login Process
router.post('/login', function(req, res, next){
    passport.authenticate('local', {
        successRedirect:'/profile',
        failureRedirect: '/users/login',
    })(req, res, next);
});

// Logout
router.get('/logout', function(req, res){
    req.logout();
    console.log('Logged out')
    res.redirect('/users/login')
})


module.exports = router;