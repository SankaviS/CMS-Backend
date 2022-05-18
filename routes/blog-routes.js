import express from "express";
import {
  addBlog,
  getAllBlog,
  updateBlog,
  getidBlog,
  deleteidBlog,
  getbyUserid,
} from "./../controllers/blog-controllers";
const blogRouter = express.Router();
blogRouter.get("/", getAllBlog);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getidBlog);
blogRouter.delete("/:id", deleteidBlog);
blogRouter.get("/user/:id", getbyUserid);
export default blogRouter;
