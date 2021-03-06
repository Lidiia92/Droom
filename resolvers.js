const GraphQLScalarType = require ('graphql');
const Kind = require('graphql/language');
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

        updateUserPersonalInfo: async (root, args, {User}) => {
            const userForCheck = await User.findOne({_id: args._id});
            if(!userForCheck) {
                throw new Error('User with provided id was not found');
            }

            userForCheck.personalInfo[0].firstName = args.firstName;
            userForCheck.personalInfo[0].lastName = args.lastName;
            userForCheck.personalInfo[0].DOB = args.DOB;
            userForCheck.personalInfo[0].state = args.state;
            userForCheck.personalInfo[0].city = args.city;
            userForCheck.personalInfo[0].avatar = args.avatar;
            userForCheck.personalInfo[0].aboutYou = args.aboutYou;

            console.log(userForCheck);

            const updatedUser = await userForCheck.save();

            return `User updated`;
        },

        updateUserEducation0: async(root, args, {User}) => {
            const userForCheck = await User.findOne({_id: args._id});
            if(!userForCheck) {
                throw new Error('User with provided id was not found');
            }

            userForCheck.education[0].schoolName = args.schoolName;
            userForCheck.education[0].degree = args.degree;
            userForCheck.education[0].field = args.field;
            userForCheck.education[0].from = args.from;
            userForCheck.education[0].to = args.to;

            const updatedUser = await userForCheck.save();

            return `User updated`;
        },

        updateUserEducation1: async(root, args, {User}) => {
            const userForCheck = await User.findOne({_id: args._id});
            if(!userForCheck) {
                throw new Error('User with provided id was not found');
            }

            userForCheck.education[1].schoolName = args.schoolName;
            userForCheck.education[1].degree = args.degree;
            userForCheck.education[1].field = args.field;
            userForCheck.education[1].from = args.from;
            userForCheck.education[1].to = args.to;

            const updatedUser = await userForCheck.save();

            return `User updated`;
        },

        updateUserEducation2: async(root, args, {User}) => {
            const userForCheck = await User.findOne({_id: args._id});
            if(!userForCheck) {
                throw new Error('User with provided id was not found');
            }

            userForCheck.education[2].schoolName = args.schoolName;
            userForCheck.education[2].degree = args.degree;
            userForCheck.education[2].field = args.field;
            userForCheck.education[2].from = args.from;
            userForCheck.education[2].to = args.to;

            const updatedUser = await userForCheck.save();

            return `User updated`;
        },

    },

}