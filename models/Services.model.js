const mongoose = require("mongoose");

const servicesSchema = mongoose.Schema({
  img: String,
  title: String,
});

const Services = mongoose.model("Services", servicesSchema);
module.exports = Services;
