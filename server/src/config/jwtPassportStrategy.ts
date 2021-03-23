const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const { User } = require('../models');

const opts:any = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;
if(!process.env.JWT_SECRET)
{
    console.error("JWT_SECRET is not defined!!!!!!!!!!!!! AUTH CANNOT WORK WITHOUT IT!!!!!!!!");
    process.exit(-1);
}

async function authorizeJwtToken (jwtPayload:any, done:any) {

    try {
        let user = await User.findById(jwtPayload.id)
            // Restrict the data loaded from the user model
            // .select("email")
        if (user) {
            return done(null, user);
        }
        return done(null, false);
    }
    catch(err) {
        console.log(err)
        done(null, false);
    }
}

let jwsStrategyInstance = new JwtStrategy(opts, authorizeJwtToken);

export default jwsStrategyInstance;