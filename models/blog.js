import mongoose from "mongoose";
const Schema = mongoose.Schema;
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