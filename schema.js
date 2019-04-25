
exports.typeDefs =`

    type PersonalInfo {
        firstName: String
        lastName: String
        DOB: String
        state: String
        city: String
        avatar: String
        aboutYou: String
    }

    type UserSkills {
        interests: [String]
        jobInterests: [String]
        skills: [String]
    }

    type UserEducation {
        schoolName: String
        degree: String
        field: String
        from: String
        to: String
    }

    type UserExperience {
        companyName: String
        title: String
        from: String
        to: String
    }

    type User {
        _id: ID!
        username: String! @unique
        password: String!
        email: String!
        role: String!
        joinDate: String
        personalInfo: PersonalInfo
        userSkills: [UserSkills]
        education: [UserEducation]
        experience: [UserExperience]

    }

    type Token {
        token: String!
        uid: String
    }

    type Query {
        getCurrentUser: User 
        getTestData: String
    }

    type Mutation {
        signupUser(username: String!, email: String!, password: String!, role: String): Token

    }

`;
