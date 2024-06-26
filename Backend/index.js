import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
const app = express();
import cors from "cors";

dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;
const URI = process.env.MongoDBURL;

//connect to mongodb server
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error", error);
}
app.use("/books", bookRoute);
app.use("/user", userRoute);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
