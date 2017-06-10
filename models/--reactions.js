// require mongoose
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// new Schema   
var ReactionsSchema = new Schema({
    reaction: {
        type: Schema.Types.ObjectId,
        ref: "Questions",
        link: String
    }
});

// use the abvoe schema to make the ScrapedData model
var Reactions = mongoose.model('Reactions', ReactionsSchema);

// export the model so the server can use it
module.exports = Reactions;