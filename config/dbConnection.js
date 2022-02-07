const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // MongoDB Connection
    const connect = await mongoose.connect(process.env.MONGODB_CLIENT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected : " + connect.connection.host);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
