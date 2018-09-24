const passport = require('passport');

module.exports = (app) => {
  app.get('/auth/google', passport.authenticate('google',
    {
      scope: ['profile', 'email'],
    }));

  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    console.log('req.user', req.user);
    res.json({
      data: req.user,
      data1: req.user.abc,
      success: true,
    });
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    // res.session, cookie session library extracts that
    // data out of the cookie and then assigns it to this res.session properties
    // res.session right contains the data that pasport is attemping to store inside of the cookie
    // res.session is passport.serializeUser done(null, user.id); it is user.id
    // res.send(res.session);

    res.send(req.user);
  });
};
