
exports.typeDefs =`

    type UserInfo {
        firstName: String
        lastName: String
        DOB: String
        state: String
        city: String
        interests: [String]
        avatar: String
    }

    type User {
        _id: ID
        username: String! @unique
        password: String!
        email: String!
        role: String!
        joinDate: String
        userInfo: UserInfo
    }

    type Token {
        token: String! 
    }

    type Query {
        getCurrentUser: User 
        getTestData: String
    }

    type Mutation {
        signupUser(username: String!, email: String!, password: String!, role: String): String

    }

`;
