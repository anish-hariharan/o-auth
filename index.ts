import express from "express"
import "./passport";
import passport from "./passport";
import cookieSession from "cookie-session"

const app = express();

app.use(cookieSession({
    name: 'google-auth-service',
    keys:['key1', 'key2']
}));

app.use(passport.initialize());
app.use(passport.session())

app.get("/", (req, res) => {
    res.send("<button><a href='/auth'>Login With Google</a></button>")
})

app.get("/auth", passport.authenticate('google', {scope: ['email', 'profile']}));

app.get('/auth/callback', 
    passport.authenticate('google', {
        successRedirect: '/auth/callback/sucess',
        failureRedirect: '/auth/callback/failure'
    }))

app.get('/auth/callback/sucess', (req, res) => {
    if(!req.user){
        res.redirect('/auth/callback/failure');
    }else{
        let a = req.user
        res.send('<h1>you are logged in</h1>') 
    }
})

app.get('/auth/callback/failure', (req, res) => {
    res.send("Error")
})

app.listen(9000, () => {
    console.log("localhost:9000")
})