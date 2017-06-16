// require mongoose
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// new Schema   
var LooksSchema = Schema({
    title: String,
    link: String
});

// new Schema   
var QuestionsSchema = Schema({
    question: String
});

// new Schema   
var ReactionsSchema = Schema({
    reaction: String
    
});

// new Schema
var UserSchema = Schema({
    first_name: {
        type: String,
        default: "John",
        required: true
    },
    last_initial: {
        type: String,
        default: "S",
        required: true
    },
    email: {
        type: String,
        default: "testing@gmail.com",
        required: true
    },
    age: {
        type: Number,
        default: 18,
        required: true
    },
    age_pref_min: {
        type: Number,
        default: 18,
        required: true
    },
    age_pref_max: {
        type: Number,
        default: 50,
        required: true
    },
    Location: {
        type: String
    },
    is_male: {
        type: Boolean,
        default: true,
        required: true
    },
    seeking_male: {
        type: Boolean,
        default: false,
        required: true
    },
    profile_look: String,
    looks: [{
        look: {
            link: String
        }
    }],
    Liked_By_ids: {
        type: String,
    },
    Liked_ids: {
        type: String,
    },
    Questions_Asked: [
        QuestionsSchema
    ],
    Questions_Asking: [
        QuestionsSchema
    ],
    Reactions: [
        ReactionsSchema
    ]
});


var Users = mongoose.model('Users', UserSchema);
var Looks = mongoose.model('Looks', LooksSchema);
var Reactions = mongoose.model('Reactions', ReactionsSchema);
var Questions = mongoose.model('Questions', QuestionsSchema);
module.exports = Users;