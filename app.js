import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "././routes/user-routes ";
import blogRouter from "./routes/blog-routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", router);
app.use("/blog", blogRouter);

let port = process.env.PORT || 5000;
var url =
  process.env.MONGODB_URI ||
  "mongodb+srv://sankavi:sankavi23@cluster0.hx5vd.mongodb.net/CMS?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    app.listen(port);
  })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
