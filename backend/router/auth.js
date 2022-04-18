const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../model/userSchema");
const Worker = require("../model/workerSchema");
const Authenticate = require("../middleware/Authenticate");
const app = express();
app.use("/", router);
// app.use(cookieParser());
// router.get("/", (req, res) => {
//   res.send("hello peter");
// });
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
  const { name, email, password,location,phoneNo } = req.body;
  console.log(name, email, password);
  if (!name || !email || !password || !location || !phoneNo) {
    return res.json({ error: "plz fill all the details" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(401).json({ error: "email already exist" });
    }
    const user = new User({ name, email, password,location,phoneNo });
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
    const { email, password,role} = req.body;
    if (!email || !password) {
      return res.status(400).json("please fill the entries");
    }
    if(role==1)
    {
      const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      console.log(password);
      token = await userLogin.generateAuthToken();
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
        origin: "http://localhost:3000",
      });
      // console.log("username: ",userLogin.name);
      if (isMatch) res.json({ message: "user logged in successfully" });
      else res.status(401).json({ error: "user not found" });
    }
     else {
      res.status(401).json({ error: "password dosent match" });
      // res.send("password dosent match");
    }
    }
    else if(role==0)
    {
      const workerLogin = await Worker.findOne({ email: email });
    if (workerLogin) {
      const isMatch = await bcrypt.compare(password, workerLogin.password);
      console.log(password);
      token = await workerLogin.generateAuthToken();
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
        origin: "http://localhost:3000",
      });
      if (isMatch) res.json({ message: "user logged in successfully" });
      else res.status(401).json({ error: "user not found" });
    }
     else {
      res.status(401).json({ error: "password dosent match" });
      // res.send("password dosent match");
    }
    }
    
  } catch (err) {
    console.log(err);
  }
});

router.post("/registerWorker", async (req, res) => {
  // res.render('../frontend/src/components/registerWorker.jsx', {title: 'POST registerWorker'});
  const {
    name,
    email,
    password,
    location,
    verificationNo,
    phoneNo,
    age,
    gender,
    services,
    price,
    reasons,
    recommendation,
  } = req.body;
  console.log(name, email, password);
  if (!name || !email || !password) {
    return res.json({ error: "plz fill all the details" });
  }
  try {
    const workerExist = await Worker.findOne({ email: email });
    if (workerExist) {
      return res.status(401).json({ error: "email already exist" });
    }
    const worker = new Worker({
      name,
      email,
      password,
      location,
      verificationNo,
      phoneNo,
      age,
      gender,
      services,
      price,
      recommendation,
      reasons,
    });
    const workerRegister = await worker.save();
    if (workerRegister) {
      res.status(201).json({ message: "success" });
    } else {
      res.status(500).json({ error: "error" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/profile", Authenticate, (req, res) => {
  console.log("chl rha hai");
  res.send(req.rootUser);
});
router.get("/data",(req,res)=>{
  Worker.find().then(worker=>res.json(worker))
  .then((err)=>res.status(400))
})
router.get('/get',Authenticate,(req,res)=>{
  console.log('hello my about');
  res.send(req.rootUser)
})
router.get('/logout',(req,res)=>{
  console.log('hello my about');
  res.clearCookie('jwtoken',{path:'/'});
  res.status(200).send("User Logged Out")
})
module.exports = router;
