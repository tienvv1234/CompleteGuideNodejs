const _ = require('lodash');
const Path = require('path-parser').default;
const { URL } = require('url'); // default lib in nodejs
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');
module.exports = app => {
  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thanks for Voting!');
  });

  app.post('/api/surveys/webhooks', (req, res) => {
    const p = new Path('/api/surveys/:surveyId/:choice');
    // const events = _.map(req.body, ({ email, url }) => {
    //   const match = p.test(new URL(url).pathName);
    //   if (match) {
    //     return {
    //       email,
    //       surveyId: match.surveyId,
    //       choice: match.choice,
    //     };
    //   }
    // });
    // console.log('events', events);
    // // compact remove all undefined element
    // const compactEvents = _.compact(events);
    // console.log('compactEvents', compactEvents);
    // // remove 2 field email and surveryId if it duplicated
    // const uniqueEvents = _.uniqBy(compactEvents, 'email', 'surveyId');

    // console.log('uniqueEvents', uniqueEvents);
    // REFACTORE this code with chain lodash
    // this is pipeline
    console.log('req.body', req.body);
    const events = _.chain(req.body)
      .map(({ email, url }) => {
        console.log(1);
        const match = p.test(new URL(url).pathname);
        console.log('match', match);
        if (match) {
          return {
            email,
            surveyId: match.surveyId,
            choice: match.choice,
          };
        }
      })
      .compact()
      .uniqBy('email', 'surveyId')
      .value();

    console.log('events', events);

    res.send({});
  });

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const {
      title, subject, body, recipients,
    } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      // recipients: recipients.split(',').map(email => {
      //   return { email: email.trim() };
      // }),
      // same above
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    // Great place to send an email.
    const mailer = new Mailer(survey, surveyTemplate(survey));
    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();
      res.send(user);
    } catch (error) {
      res.status(422).send(error);
    }
  });
};
