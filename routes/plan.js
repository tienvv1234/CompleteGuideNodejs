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

  // cus_DQ6FfZJHxOCDf8, sub_DQ6FojKuWIEopa, plan_DQ5xyWc2er3UhL, licensed
  // cus_DQ6NUxRWlSBsOL, sub_DQ6Nr8kGLONBQS si_DQ6NVlldHzk3z0, plan_DQ5uaaLOaNyvTo, metered usage
  stripe.subscriptions.retrieve('sub_DSKn6UueMmAJzt', function(
    err,
    subscription,
  ) {
    // asynchronously called
    console.log('subscription', subscription);
    console.log('subscription', subscription.discount.coupon.id);
  });

  // // stripe.usageRecords.create("si_DQ8vgsdRJogwh5", {
  // //   quantity: 15,
  // //   timestamp: 1534487898,
  // //   action: "set"
  // // }, function (err, usageRecord) {
  // //   // asynchronously called
  // //   console.log("err", err);

  // //   console.log("usageRecord", usageRecord);
  // // });
  // send lại report vào event invoice.create nếu period không hay thôi thì nên cộng thêm 1 ngày
}

module.exports = app => {
  app.get('/test', (req, res) => {
    test().then(
      result => {
        res.send({
          status: 'success',
          token: result,
        });
      },
      error => {
        res.send({
          status: 'error',
          message: error.message,
        });
      },
    );
  });
};
