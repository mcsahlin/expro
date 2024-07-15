const mongoose = require('mongoose');

const connDB = async () => {
  try {
    const connected = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MongoDB: ${connected.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connDB;
