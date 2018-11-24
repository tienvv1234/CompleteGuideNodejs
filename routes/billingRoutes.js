/*eslint sort-imports: 2*/
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');
module.exports = (app) => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      currency: 'usd',
      amount: 500,
      description: '$5 for 5 credits',
      source: req.body.id,
    });

    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
