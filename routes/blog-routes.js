import express from "express";
import {
  addBlog,
  getAllBlog,
  updateBlog,
  getidBlog,
  deleteidBlog,
  getbyUserid,
} from "./../controllers/blog-controllers";

//Defining routes for each type of function

const blogRouter = express.Router();
blogRouter.get("/user/:id", getbyUserid);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getidBlog);
blogRouter.delete("/:id", deleteidBlog);
blogRouter.get("/", getAllBlog);
export default blogRouter;
