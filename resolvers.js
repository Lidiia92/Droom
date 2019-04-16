exports.resolvers = {
    Query: {
        getTestData: () => {
            return 'Testing testing';
        },
    },

    Mutation: {
        signupUser: async (root, args, context) => {

            const {User} = context;

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