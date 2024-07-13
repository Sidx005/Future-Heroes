const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    characters: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const StoryModel = mongoose.model('Story', storySchema);
module.exports = StoryModel;
