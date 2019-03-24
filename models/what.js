const mongoose = require("mongoose");

const report = mongoose.Schema({
  
  _id: mongoose.Schema.Types.ObjectId,
  username: String,
  userID: String,
  reason: String,
  reportedBy: String,
  reportedId: String,
  time: String
  
  
});


module.exports = mongoose.model("Report", report);
  
  
  
