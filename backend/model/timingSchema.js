const mongoose = require("mongoose");
const timingSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  worker_email: {
    type: String,
    required: true,
  },
});

const Timing = mongoose.model("TIMING", timingSchema);
module.exports = Timing;
