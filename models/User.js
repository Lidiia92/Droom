const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserPersonalInfo = new Schema({

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

        aboutYou: {
            type: String,
            default: ""
        }
});

const UserSkills = new Schema({

    interests: {
        type: [String],
        default: [""]
    },
    jobInterests: {
        type: [String],
        default: [""]
    },

    skills: {
        type: [String],
        default: [""]
    }
});

const UserEducation = new Schema({
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
});

const UserExperience = new Schema({
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
});


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

    personalInfo: {
        type: [UserPersonalInfo],
        default: [UserPersonalInfo]
    },

    userSkills: {
        type: [UserSkills],
        default: [UserSkills]
    },

    education: {
        type: [UserEducation],
        default: [UserEducation]
    },


    experience: {
        type: [UserExperience],
        default: [UserExperience]
    }

});


module.exports = mongoose.model('User', UserSchema);
