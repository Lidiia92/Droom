const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({

    _id: {
        
        type: Schema.ObjectId, 
        auto: true 

    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    joinDate: {
        type: Date,
        default: Date.now
    },

    role: {
        type: String,
        default: "employee"
    },

    personalInfo: [
        
        {

        firstName: {
            type: String,
            default: "" 
        },

        lasName: {
            type: String,
            default: ""
        },

        DOB: {
            type: Date,
            default: Date.now
        }, 

        state: {
            type: String,
            default: ""
        },

        city: {
            type: String,
            default: ""
        }, 

        avatar: {
            type: String,
            default: ""
        },
    }

    ],

    userSkills: [
        {
            jobInterests: {
                type: [String],
                default: [""]
            },

            skills: {
                type: [String],
                default: [""]
            }
        }
    ],

    education: [

        {
            schoolName: {
                type: String,
                default: ""
            },

            degree: {
                type: String,
                default: ""
            },

            field: {
                type: String,
                default: ""
            },

            from: {
                type: String,
                default: ""
            },

            to: {
                type: String,
                default: ""
            }
        }
    ],

    experience: [
        {
            companyName: {
                type: String,
                default: ""
            },

            title: {
                type: String,
                default: ""
            },

            from: {
                type: String,
                default: ""
            },

            to: {
                type: String,
                default: ""
            }
        }
    ]
 

});


module.exports = mongoose.model('User', UserSchema);
