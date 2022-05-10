const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../model/userSchema");
const Worker = require("../model/workerSchema");
const Authenticate = require("../middleware/Authenticate");
const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
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
  const { name, email, password, location, phoneNo } = req.body;
  console.log(name, email, password);
  if (!name || !email || !password || !location || !phoneNo) {
    return res.json({ error: "plz fill all the details" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(401).json({ error: "email already exist" });
    }
    console.log(name);

    const user = new User({ name, email, password, location, phoneNo });
    const userRegister = await user.save();
    if (userRegister) {
      res.status(201).json({ message: "success" });
    } else {
      res.status(500).json({ error: "error" });
    }
  } catch (err) {
    console.log(err);
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "door2door.jiit@gmail.com",
      pass: "Sameeravish@2022",
    },
  });
  const mailOptions = {
    from: "door2door.jiit@gmail.com",
    to: email,
    subject: "hello peter",
    text: `Hello ${name}, Thanks for registering to our company.`,
  };
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) console.log(err);
    else console.log("message sent");
  });
});

//login route
router.post("/login", async (req, res) => {
  try {
    let token;
    const { email, password, role } = req.body;
    console.log(role);
    if (!email || !password) {
      return res.status(400).json("please fill the entries");
    }
    if (role == 1) {
      const userLogin = await User.findOne({ email: email });
      if (userLogin) {
        const isMatch = await bcrypt.compare(password, userLogin.password);
        console.log(password);
        token = await userLogin.generateAuthToken();
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });
        // console.log("username: ",userLogin.name);
        console.log(isMatch);
        if (isMatch) res.json({ message: "user logged in successfully" });
        else res.status(401).json({ error: "user not found" });
      } else {
        res.status(401).json({ error: "password dosent match" });
        // res.send("password dosent match");
      }
    } else if (role == 0) {
      const workerLogin = await Worker.findOne({ email: email });
      if (workerLogin) {
        const isMatch = await bcrypt.compare(password, workerLogin.password);
        console.log(password);
        token = await workerLogin.generateAuthToken();
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });
        if (isMatch) res.json({ message: "user logged in successfully" });
        else res.status(401).json({ error: "user not found" });
      } else {
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
  console.log(req.rootUser);
  res.send(req.rootUser);
});
router.get("/data", (req, res) => {
  Worker.find()
    .then((worker) => res.json(worker))
    .then((err) => res.status(400));
});
router.get("/get", Authenticate, (req, res) => {
  console.log("hello my about");
  res.send(req.rootUser);
});
router.get("/logout", (req, res) => {
  console.log("hello my about");
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("User Logged Out");
});
router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete({ _id: id }, (req, res, err) => {
    if (!err) console.log("item deleted");
    else console.log(err);
  });
});
router.get("/get/profile/:id", (req, res) => {
  // console.log(req.params.id);
  // const found = Worker.findOne({_id:req.params.id});
  // res.json(found);
  Worker.findOne({ _id: req.params.id })
    .then((worker) => res.send(worker))
    .then((err) => res.status(400));
});
router.post("/dt", async (req, res) => {
  const { date, time, email, name, price } = req.body;
  console.log(date, time, email, name, price);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "door2door.jiit@gmail.com",
      pass: "Sameeravish@2022",
    },
  });
  const mailOptions = {
    from: "door2door.jiit@gmail.com",
    to: "animeshkaushik10@gmail.com",
    subject: "regarding door2door services.",
    text: `Your date is ${date} and time is ${time} and name of worker is ${name} with price ${price}`,
  };
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) console.log(err);
    else console.log("message sent");
  });
});
router.put("/put/:id", (req, res) => {
  let check;
  check = req.body.role;
  console.log(check);
  if (check == 1) {
    const updatedItem = {
      name: req.body.name,
      email: req.body.email,
      location: req.body.location,
      phoneNo: req.body.phoneNo,
    };
    User.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: updatedItem },
      (req, res, err) => {
        if (!err) console.log("item updated");
        else console.log(err);
      }
    );
  } else {
    const updatedItem = {
      name: req.body.name,
      email: req.body.email,
      location: req.body.location,
      phoneNo: req.body.phoneNo,
      price: req.body.price,
      reasons: req.body.reasons,
    };
    Worker.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: updatedItem },
      (req, res, err) => {
        if (!err) console.log("item updated");
        else console.log(err);
      }
    );
  }
  // res.redirect("/")
});
module.exports = router;
