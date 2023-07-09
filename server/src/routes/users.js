
const express = require("express");
const jwt=require("jsonwebtoken") ;
const bcrypt=require("bcrypt") ;
const UserModel=require("../model/Users")

const userRouter  = express.Router();

userRouter.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });

  if (user) {
    return res.json({ message: "User already exists!" });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = new UserModel({
    username,
    password: hashPassword,
  });

  await newUser.save();
  res.json({ message: "User Registered Successfully!" });
});
userRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username});

  if (!user) {
    return res.json({ message: "User Doesn't Exist! Register first" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.json({ message: "Username or Password Is Incorrect!" });
  }
  const token = jwt.sign({ id: user._id }, "secret");

  res.json({ token: token, userID: user._id });
});


module.exports = userRouter 