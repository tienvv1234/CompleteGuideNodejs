//import passport
const passport = require('passport');
//import passport-google-oauth20 and using property Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('../config/keys');
//console.developers.google.com
passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        console.log('access token', accessToken);
        console.log('refresh token', refreshToken);
        console.log('Profile ', profile);
    })
);
