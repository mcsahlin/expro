const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ //Creating a schema
    email: { type: String, required: true, unique: true },
    username: {
        type: String,
        required: true,
    },
    password: { type: String, required: true },
    token: {
        type: String,
        default: ''
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