// const passport = require('passport');

// passport.use('local.sgiup', new LocalStategy({
    //     usernameField: 'username',
    //     passwordField: 'password',
    //     passReqToCallback: true
    // } , async (req, username, password, done) => {
        //         console.log(req.body)
        //     }
        // ))
        


// Need to check await bcrypt
// const LocalStrategy = require('passport-local').Strategy
// const bcrypt = require('bcrypt');

// function initialize(passport, getUserByUsername) {
//     const authenticateUser = (username, password, done) => {
//         const user = getUserByUsername(username)
//         if (user == null) {
//             return done(null, false, { message: 'No user with that username' })
//         }


//         try {
//             if(await bcrypt.compare(password, user.password)) {
//                 return done(null, user)
//             } else {
//                 return done(null, false, { message: 'Password incorrect' })
//             }
//         } catch (error){
//             return done(error)
//         }
//     }

//     passport.user(new LocalStrategy({
//         usernameField: 'username',
//         passwordField: 'password'
//     }), authenticateUser)
//     passport.serializeUser((user, done) => { })
//     passport.deserializeUser((id, done) => { })

// }

// module.exports = initialize