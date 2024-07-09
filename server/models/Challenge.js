const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({ //Creating a schema
    name: {
        type: String,
        required: true,
    },
    task: {
        type: String,
        required: true,
    },
    taskCountTarget: {
        type: Number,
        required: true,
    },
    taskCountCurrent: {
        type: Number,
        default: 0
    },
    active: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Challenge', challengeSchema); //Exporting the model