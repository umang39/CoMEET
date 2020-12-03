const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User=require('../models/user')


//authentication using passport
passport.use(new LocalStrategy({
    usernameField: 'email',
    
},

  function(email, password, done) {
      // find a user and establish the identity
    User.findOne({ email:email }, function (err, user) {
        console.log('inside finding user');
      if (err) {
          console.log('error in finding user-->passport');
           return done(err); 
           }
      if (!user) {
           return done(null, false); 
           }
           console.log('inside verify password');
      if (user.password != password) { 
          console.log('Invalid Username/Passport');
          return done(null, false); }
      return done(null, user);
    });
  }
));

//serializing the user to decide which keys to kept in cookies
passport.serializeUser((user, done) => {
    done(null, user.id);
});



//deserializing the user from the key in the cookie
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        if (err) {
            console.log('error in finding user --> passport');
            return done(err);

        }
        return done(null, user);
    });

});

//check if the user is authenticated
passport.checkAuthentication = (req, res, next) => {
    //if user is sign in ,then pass on the request to the next function(controller's action)
    if (req.isAuthenticated()) {
        return next();
    }
    //if the user is not signed in
    return res.redirect('/users/sign-in')
}

passport.setAuthenticatedUser = (req, res, next) => {
    if (req.isAuthenticated()) {
        //req.user contain the current signed in user from the session cookie and we are just sending this to the locals for the views 
        res.locals.user = req.user;
    }
    next();
}



module.exports=passport;