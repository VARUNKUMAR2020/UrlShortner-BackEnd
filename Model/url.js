const mongoose = require("mongoose");
const shortId = require("shortid");

const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate(),
  },
  click:{
    type:Number,
    required:true,
    default:0
  }
});

const Url = mongoose.model("Url", shortUrlSchema);

module.exports = Url;
