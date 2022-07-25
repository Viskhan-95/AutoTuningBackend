const mongoose = require("mongoose");

const servicesSchema = mongoose.Schema({
  img: String,
  title: String,
  text: String,
  class: String,
  time: {
    type: Number,
    default: 1,
  }
});

const Services = mongoose.model("Services", servicesSchema);
module.exports = Services;
