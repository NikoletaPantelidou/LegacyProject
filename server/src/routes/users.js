/* AMENE AND MELPOMENI'S CODE

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
*/
const express = require("express");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const userModel = require("../model/Users");
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  var checkUser = await userModel.findOne({ username: req.body.username });
  if (checkUser) {
    res.send({ msg: "This username already exists" });
  }
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(req.body.password, salt, async (err, hash) => {
      var user = { username: req.body.username, password: hash };
      await userModel.create(user);
      res.send({ msg: "The user saved successfully" });
    });
  });
});

userRouter.post("/login", async (req, res) => {
  var user = await userModel.findOne({ username: req.body.username });
  if (user) {
    bcrypt.compare(req.body.password, user.password, function (err, result) {
      if (result) {
        //create the token to send it back to the front
        //payload + secret ==> token
        var token = jwt.sign({ id: user._id }, "greenfield");
        res.send({ token });
      } else {
        res.status(500).json({ error: "Wrong password" });
      }
    });
  } else {
    res.status(500).json({ error: "Wrong username" });
  }
});

module.exports = userRouter;
