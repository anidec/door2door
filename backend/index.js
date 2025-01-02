const dotenv = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cookieParser = require("cookie-parser");
app.use(cookieParser());
dotenv.config({ path: "./.env" });
app.use(express.json());
app.use(require("./router/auth"));
const User = require("./model/userSchema");
const DB = process.env.DATABASE;
console.log("..................")
console.log(DB)
mongoose
  .connect(DB)
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(6000, () => {
  console.log("server running on port 6000");
});
