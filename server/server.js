import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const PORT = 4000;
const app = express();
app.use(cors());

const connectDB = await mongoose.connect(
  "mongodb+srv://trivesh:tri123km@mernproject.ihdasvb.mongodb.net/?retryWrites=true&w=majority"
);
if (connectDB) {
  console.log("MongoDB connection is successful");
}

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}`)
);
