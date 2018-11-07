// import express
const express = require('express');
const mongoose = require('mongoose');
// cookie-sessionm express-session both of these libraries essentially accomplish
// the same thing but they do it in a very different fashion
const cookieSession = require('cookie-session');
// tell passport keep track of our user session,.. for lack of a better term by ussing cookies
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');


mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoUri, { useNewUrlParser: true });

const app = express();

app.use(bodyParser.json());
// use midder ware add cookiesession
// essentially telling passport to use cookies to manage our authentication
app.use(cookieSession({
  // the first is a max age property max age is how long
  // this cookie can exist inside the browser before it is automatically expired for us
  maxAge: 30 * 24 * 60 * 60 * 1000, // this is 30 days before it is automatically expired
  keys: [keys.cookieKey],
  // this property Keys is an array and it will randomly pick one to use to encrypt any given cookie
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/plan')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
