const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ //Creating a schema
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: {
        type: String,
    },

    token: {
        type: String,
    },
    role: {
        type: String,
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema); //Exporting the model