import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
dotenv.config();
const port = process.env.PORT;
const __dirname = path.resolve();

// MongoDb Connect
mongoose.connect(process.env.MONGO_URL);

const blogPostSchema = new mongoose.Schema({
  topic: String,
  title: String,
  description:String,
  
});

const blogPost = mongoose.model("blogPost", blogPostSchema);

app.get("/api/posts", async (req, res) => {
  const posts = await blogPost.find();
  res.json(posts);
});

app.post("/api/posts", async (req, res) => {
  const { topic, title,description  } = req.body;
  const newPost = new blogPost({ topic, title,description });
  await newPost.save();
});

app.use(express.static(path.join(__dirname, "../FORTEND")));

app.listen(port, () => {
  console.log(
    `Server is running on port http://localhost:${process.env.PORT}/`
  );
});
