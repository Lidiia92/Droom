const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
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

        zipCode: {
            type: String,
            default: ""
        }

    },

    avatar: {
        type: String,
        default: ""
    },

    preferedFields: {
        type: [String],
        default: [""]
    },

    preferedLocations: {
        type: [String],
        default: [""]
    },
    

});

//Before User saved to the db
UserSchema.pre('save', function(next) {
    if(!this.isModified()) {
        return next();
    }

    bcrypt.genSalt(10, (err, salt) => {
        if(err) return next(err);
        bcrypt.hash(this.password, salt, (err, hash) => {
            if(err) return next(err);
            this.password = hash;
            next();
        })
    })
});

module.exports = mongoose.model('User', UserSchema);
