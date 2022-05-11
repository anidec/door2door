const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const servicesSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  text: {
    type: String,
    required: true,
  },
});

const workerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  services: [servicesSchema],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  reasons: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  role: {
    type: Number,
    default: 0,
  },
});

//we are hashing the password

workerSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

//we are generating token
workerSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

const Worker = mongoose.model("WORKER", workerSchema);
module.exports = Worker;
