const User = require('../models/user');

module.exports.profile =(req, res)=>{
    return res.render('user_profile', {
        title: 'User Profile'
    })
}

//render the sign In page 
module.exports.SignIn=(req,res)=>{
    if (req.isAuthenticated()) {
        return res.redirect('/users/profile')
    }


    return res.render('user_sign_in',{
        title:'Sign In Page'
    })
}

// render the sign up page 
module.exports.SignUp=(req,res)=>{
    if (req.isAuthenticated()) {
        return res.redirect('/users/profile')
    }

    return res.render('user_sign_up',{
        title:'Sign Up Page'
    })
}

// create user
module.exports.create=(req,res)=>{
    if (req.body.password != req.body.confirm_password) {
        return res.redirect('back');
    }

    User.findOne({ email: req.body.email }, function(err, user) {
        if (err) { console.log('error in finding user in signing up'); return }

        if (!user) {
            User.create(req.body, function(err, user) {
                if (err) { console.log(err,'error in creating user while signing up'); return }
                console.log(user,'User is successfully Created');
                return res.redirect('/users/sign-in');
            })
        } else {
            console.log('user is already exist');
            return res.redirect('back');
        }

    });
}

//sign in using username and password and get the signIn data(done using passport)
module.exports.createSession = (req, res) => {
    //todo later
    console.log('Logged in successfully');
    return res.redirect('/');
};

//sign out using passport log out method
module.exports.destroySession = (req, res) => {
    req.logout();
    console.log('Logout in successfully');
    return res.redirect('/');
};
