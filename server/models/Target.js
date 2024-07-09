const mongoose = require('mongoose');

const targetSchema = new mongoose.Schema({ //Creating a schema
    name: {
        type: String,
        required: true,
    },
    targetDate: {
      type: Date,
      required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Target', targetSchema); //Exporting the model

