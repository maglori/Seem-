// require mongoose
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// new Schema   
var QuestionsSchema = new Schema({
    question: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        Question: String
    }
});

// use the abvoe schema to make the ScrapedData model
var Questions = mongoose.model('Questions', QuestionsSchema);

// export the model so the server can use it
module.exports = Questions;