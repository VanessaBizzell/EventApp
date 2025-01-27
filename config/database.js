const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`connected to db${connection.connection}`);
  } catch (error) {
    console.error(`Error; ${error.message}`);
    process.exit(1)
  }
};

module.exports = connectDB;