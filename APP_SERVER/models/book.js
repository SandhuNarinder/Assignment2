const mongoose = require('mongoose');
const bookSchema = new
mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3
    },
    type: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    publish: {
        type: String,
        required: true
    }
});
mongoose.model('book', bookSchema)
