const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../model/userSchema");
router.get("/", (req, res) => {
  res.send("hello peter");
});
//using promises
// router.post("/register",(req, res) => {
//   const { name, email, password } = req.body;
//   if (!name || !email || !password) {
//     return res.json({ error: "plz fill all the details" });
//   }
//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "email already exist" });
//       }
//       const user = new User({ name, email, password });
//       user
//         .save()
//         .then(() => {
//           res.send(201).json("success");
//         })
//         .catch((err) => res.status(500).json({ err: "failed to register" }));
//     })
//     .catch((err) => console.log(err));
// });
// using async await
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  if (!name || !email || !password) {
    return res.json({ error: "plz fill all the details" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(401).json({ error: "email already exist" });
    }
    const user = new User({ name, email, password });
    const userRegister = await user.save();
    if (userRegister) {
      res.status(201).json({ message: "success" });
    } else {
      res.status(500).json({ error: "error" });
    }
  } catch (err) {
    console.log(err);
  }
});

//login route
router.post("/login", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json("please fill the entries");
    }
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (isMatch) res.json({ message: "user logged in successfully" });
      else res.json({ error: "user not found" });
    } else {
      res.send("password dosent match");
    }
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
