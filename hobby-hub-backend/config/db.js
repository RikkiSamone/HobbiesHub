// db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Using the MongoDB connection string from the environment variable (optional)
    const conn = await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/hobbyTracker", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;