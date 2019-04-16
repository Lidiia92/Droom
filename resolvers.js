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

            const newUser = await new User({
                username: args.username,
                email: args.email,
                password: args.password,
                role: args.role
            }).save();
    
                return `New user was created ${newUser}`;
        },

    }

}