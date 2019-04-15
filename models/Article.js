const mongoose = require("mongoose");

//reference to schema constructor
const Schema = mongoose.Schema;

//sets structure of schema
const ArticleSchema = new Schema({
    headline: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

//creates model
const Article = mongoose.model("Article", ArticleSchema);

//exports model
module.exports = Article;