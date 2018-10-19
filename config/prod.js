// prod.js - production key here!!
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoUri: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  googleRedirectURI: 'https://bayou.herokuapp.com',
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STIPE_SECRET_KEY,
};
