exports.resolvers = {
    Query: {
        getTestData: () => {
            return 'Testing testing';
        },
    },

    Mutation: {
        signupUser: (_, args) => {
            console.log('args', args);
            const {username, email} = args;
            return (`User ${username} was signed up`);
        }

    }

}