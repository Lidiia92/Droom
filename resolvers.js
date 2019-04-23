const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createToken = (user, secret, expiresIn) => {
    const {username, email} = user; 
    return jwt.sign({username, email}, secret, {expiresIn})
}

exports.resolvers = {
    Query: {
        getTestData: () => {
            return 'Testing testing';
        },
    },

    Mutation: {
        signupUser: async (root, args, {User}) => {

            const userForCheck = await User.findOne({username: args.username});
            if(userForCheck) {
                throw new Error('User already exists');
            }

            const hash = bcrypt.hashSync(args.password, 10);

            const newUser = await new User({
                username: args.username,
                email: args.email,
                password: hash,
                role: args.role
            }).save();

            const token  = createToken(newUser, process.env.SECRET, '1hr');
            return {token: token, uid: newUser._id};
        },

        uploadFile: async (root, args) => {
            console.log(args.file);
            return true;
        }

    }

}