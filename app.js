import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "././routes/user-routes ";
import blogRouter from "./routes/blog-routes";

const app = express();
app.use(express.json());
app.use("/user", router);
app.use("/blog", blogRouter);
app.use(cors());
let port = process.env.PORT || 3000;
mongoose
  .connect(
    "mongodb+srv://sankavi:sankavi23@cluster0.hx5vd.mongodb.net/CMS?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port);
  })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
