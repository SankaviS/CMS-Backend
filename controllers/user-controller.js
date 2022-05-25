import User from "../models/user";
import bcrypt from "bcryptjs/dist/bcrypt";

//Function for getting all the users

export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: "No users found" });
  }
  return res.status(200).json({ users });
};

//Function for posting data of new user

export const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;
  let existing;
  try {
    existing = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existing) {
    return res.status(400).json({ message: "User already exists" });
  }
  const haspass = bcrypt.hashSync(password);
  const user = new User({ name, email, password: haspass, blogs: [] });
  try {
    await user.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ user });
};

//Function for checking login data

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existing;
  try {
    existing = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existing) {
    return res.status(400).json({ message: "User not exists" });
  }
  const ispassword = bcrypt.compareSync(password, existing.password);
  if (!ispassword) {
    return res.status(400).json({ message: "Incorrect password" });
  }
  return res
    .status(200)
    .json({ message: "user login successfull", user: existing });
};
