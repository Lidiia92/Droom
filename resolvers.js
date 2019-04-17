const bcrypt = require('bcrypt');

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
    
                return `New user was created ${newUser}`;
        },

    }

}