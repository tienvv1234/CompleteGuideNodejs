//import passport
const passport = require('passport');
//import passport-google-oauth20 and using property Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
//console.developers.google.com
//model class
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    // user in here is the user from passport (GoogleStrategy), in done function and the done have arguments the first is if some thing wrong, the section is result we want to pass
    //this function will create the identify token with user.id and return to client for save to cookie
    console.log("serializeUser  ", user);

    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    //this function will receive the identify token and turn it back to user id from cookie in client
    console.log("deserializeUser ", id);
    User.findById(id).then(user => { done(null, user) })
})

passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        //advenced feature of javascript that include in es 2017: .then(() => {}) arrow function
        //the query return a promise
        User.findOne({ googleId: profile.id }).then(exsitingUser => {
            if (exsitingUser) {
                console.log("exsitingUser");
                // we already have a record with the given profileId
                // the first argument will be an air object, this object communicates back to a pasport that maybe somthing went wrong or maybe something didn't quite work the way we expected
                done(null, exsitingUser);
            } else {
                console.log("new User");
                //we don't have a user record with this Id, make a new record
                //a model instance
                new User({
                    googleId: profile.id
                }).save().then(user => done(null, user));
            }
        })


    })
);
