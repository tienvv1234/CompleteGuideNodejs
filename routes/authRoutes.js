const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google',
        {
            scope: ['profile', 'email']
        })
    );

    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user)
    })

    app.get('/api/curent_user', (req, res) => {
        //res.session, cookie session library extracts that data out of the cookie and then assigns it to this res.session properties
        // res.session right contains the data that pasport is attemping to store inside of the cookie
        // res.session is passport.serializeUser done(null, user.id); it is user.id
        //res.send(res.session);

        res.send(req.user)
    });
}
