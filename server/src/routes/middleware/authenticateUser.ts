import passport from 'passport';

const authenticateUser = passport.authenticate('jwt', { session: false });
export default authenticateUser;
