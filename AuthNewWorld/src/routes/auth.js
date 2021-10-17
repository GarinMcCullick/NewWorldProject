const router = require('express').Router(); //setting router to call the default Router function
const passport = require('passport');

router.get('/', passport.authenticate('discord'));
router.get('/redirect', passport.authenticate('discord', {
    failureRedirect: '/forbidden',
    successRedirect: '/dashboard'
}), (req, res) =>{
    res.send(req.user);
})

module.exports = router; //just exporting to app just like a component
