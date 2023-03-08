const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user.route");
const app = express();
dotenv.config();

mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

app.use("/api/users", userRoute);

app.listen(3000, () => {
  connect();
  console.log("Server is running on port 3000");
});
