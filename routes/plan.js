const stripe = require('stripe')('sk_test_euhBFP1reSeKIINuupZzw5KR');

async function test() {
  const plans = await stripe.plans.list();
  // console.log("plans", plans);
  console.log('plans[0].id', plans.data[0].id);

  const cardToken = await stripe.tokens.create({
    card: {
      exp_month: 10,
      exp_year: 2018,
      number: '4242 4242 4242 4242',
      cvc: 100,
    },
  });
  // console.log("cardToken", cardToken)
  console.log('cardToken.id', cardToken.id);

  const customerStripe = await stripe.customers.create({
    description: 'Customer for tienvv1234@gmail.com',
    email: 'tienvv1234@gmail.com',
    source: cardToken.id, // obtained with Stripe.js
  });

  // console.log("customerStripe", customerStripe)

  console.log('customerStripe', customerStripe.id);


  const subscription = await stripe.subscriptions.create({
    customer: customerStripe.id,
    items: [
      {
        plan: plans.data[0].id,
      },
    ],
  });

  console.log('subscription', subscription);

  // stripe.tokens.create({
  //   card: {
  //     exp_month: 10,
  //     exp_year: 2018,
  //     number: '4242 4242 4242 4242',
  //     cvc: 100
  //   }
  // }, function (err, token) {
  //   console.log("token", token);
  //   stripe.customers.create({
  //     description: 'Customer for tienvv1234@gmail.com',
  //     email: 'tienvv1234@gmail.com',
  //     source: token.id // obtained with Stripe.js
  //   }, function (err, customer) {
  //     console.log("err", err);
  //     console.log("err", customer);
  //   });
  // });
  // stripe.subscriptions.create({
  //   customer: "cus_DEYf08f0Jkyvqz",
  //   items: [
  //     {
  //       plan: "plan_DEBztqKcH8aS1K",
  //     },
  //   ]
  // }, function (err, subscription) {
  //   // asynchronously called
  // }
  // );


  // stripe.plans.list(
  //   function (err, plans) {
  //     if(err){
  //       console.log(err);
  //     }
  //     console.log(plans);
  //   }
  // );
}


module.exports = (app) => {
  app.get('/test', (req, res) => {
    test().then((result) => {
      res.send({
        status: 'success',
        token: result,
      });
    }, (error) => {
      res.send({
        status: 'error',
        message: error.message,
      });
    });
  });
};
