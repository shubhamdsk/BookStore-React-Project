import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors());
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
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
