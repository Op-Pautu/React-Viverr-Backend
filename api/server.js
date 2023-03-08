const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

//set up routes
const userRoute = require("./routes/user.route");
const authRoute = require("./routes/auth.route");
// const conversationRoute = require("./routes/conversation.route");
// const messageRoute = require("./routes/message.route");
// const gigRoute = require("./routes/gig.route");
// const reviewRoute = require("./routes/review.route");
// const orderRoute = require("./routes/order.route");

mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
// app.use("/api/conversations", conversationRoute);
// app.use("/api/messages", messageRoute);
// app.use("/api/gigs", gigRoute);
// app.use("/api/reviews", reviewRoute);
// app.use("/api/orders", orderRoute);

app.listen(3000, () => {
  connect();
  console.log("Server is running on port 3000");
});
