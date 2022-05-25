import express from "express";
import { getAllUsers, login } from "./../controllers/user-controller";
import { signUp } from "./../controllers/user-controller";

const router = express.Router();

//Defining routes for each type of function

router.get("/", getAllUsers);
router.post("/signup", signUp);
router.post("/login", login);
export default router;
