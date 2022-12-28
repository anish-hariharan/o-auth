import passport from "passport";
import passportGoogle from "passport-google-oauth2";
const GoogleStrategy = passportGoogle.Strategy;

passport.serializeUser((user:any, done:any) => {
    done(null, user)
})

passport.deserializeUser((user:any, done:any) => {
    done(null, user);
})

passport.use(new GoogleStrategy({
    clientID: "221476199404-t7j54kjp8o4j1tb6741d2e568sd4n7tm.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:9000/auth/callback",
    passReqToCallback: true
},
    function(request:any, accessToken:any, refreshToken:any, profile:any, done:any){
        return done(null, profile)
    }
))

export default passport;