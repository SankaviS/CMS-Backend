import mongoose from "mongoose";
const Schema = mongoose.Schema;
import { ObjectId } from "mongodb";

//Defining model for blog posting using schema

const blogSchema = new Schema({
  title: {
    type: "string",
    required: true,
  },
  image: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default mongoose.model("blog", blogSchema);
