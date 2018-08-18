// key.js - figure out what set of credentials to return
/* eslint-disable global-require */
if (process.env.NODE_ENV === 'production') {
  // process.env.NODE_ENV will be created in heroku server
  // we are in production - return the prod set of keys
  module.exports = require('./prod');
} else {
  // we are in development - return the dev key!!!
  module.exports = require('./dev');
}

/* eslint-enable global-require */
