require('dotenv').config();
const express = require('express'); //the node module is a function you can invoke
const app = express(); // this is the cb for the function basically
const PORT = process.env.PORT || 3001; //defining port 3000 as default and if not then 3001
const session = require('express-session');
//these are just imports ^  \/
const passport = require('passport');
const discordStrategy = require('./strategies/discordStrategy');
const db = require('./database/database');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');

db.then(() => console.log('Connected to mongoDB')).catch(err => console.log(err));

//Routes
const authRoute = require('./routes/auth');//importing the router
const dashboardRoute = require('./routes/dashboard');

app.use(session({
    secret: 'random secret', //a secret is something the server knows that the client doesnt
    cookie: {
        maxAge: 60000 * 60 * 24 //this is keeping auth token for 24 hours
    },
    saveUninitialized: false,
    resave: false,
    name: 'discord.oauth2',
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

//Passport
app.use(passport.initialize());
app.use(passport.session());

//MiddleWare Routes
app.use('/auth', authRoute);//use function applies middleware
app.use('/dashboard', dashboardRoute);

//just confirmation in terminal that server is listining.
app.listen(PORT, () => {
    console.log(`Now listining to requests on port ${PORT}`);
})