import mongoose from "mongoose";
import blog from "../models/blog";
import Blog from "../models/blog";
import User from "../models/user";

//Function for getting all the blog posted by the user

export const getAllBlog = async (req, res, next) => {
  let blog;
  try {
    blog = await Blog.find().populate("user");
  } catch (err) {
    console.log(err);
  }
  if (!blog) {
    res.status(404).json({ message: "There is no blogs" });
  }
  return res.status(200).json({ blog });
};

//Function for posting a new blog

export const addBlog = async (req, res, next) => {
  const { title, description, image, user } = req.body;
  let existing;
  try {
    existing = await User.findById(user);
  } catch (e) {
    console.log(e);
  }
  if (!existing) {
    return res.status(404).json({ message: "Unable to find user by this ID." });
  }

  const blog = new Blog({ title, description, image, user });
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await blog.save({ session });
    existing.blog.push(blog);
    await existing.save({ session });

    await session.commitTransaction();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
  return res.status(200).json({ blog });
};

//Function for updating the existing blog

export const updateBlog = async (req, res, next) => {
  const { title, description } = req.body;
  const blogid = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndUpdate(blogid, { title, description });
  } catch (err) {
    return console.log(err);
  }
  if (!blog) {
    res.status(404).json({ message: "unable to update" });
  }
  return res.status(200).json({ blog });
};

v;

export const getidBlog = async (req, res, next) => {
  const blogid = req.params.id;
  let blog1;
  try {
    blog1 = await Blog.findByIdAndUpdate(blogid);
  } catch (err) {
    console.log(err);
  }
  if (!blog1) {
    res.status(404).json({ message: "No such blog found" });
  }
  return res.status(200).json({ blog1 });
};

//Function for deleting blog of a particular user

export const deleteidBlog = async (req, res, next) => {
  const blogid = req.params.id;
  let blog1;
  try {
    blog1 = await Blog.findByIdAndRemove(blogid).populate("user");
    await blog1.user.blog.pull(blog);
  } catch (err) {
    console.log(err);
  }
  if (!blog1) {
    res.status(404).json({ message: "No such blog to delete" });
  }
  return res.status(200).json({ blog1 });
};

//Function for getting all the blog posted by the user

export const getbyUserid = async (req, res, next) => {
  const blogid = req.params.id;
  let userblog;
  try {
    userblog = await User.findById(blogid);
  } catch (err) {
    console.log(err);
  }
  if (!userblog) {
    return res.status(404).json({ message: "No blog found" });
  }
  return res.status(200).json({ user: userblog });
};
