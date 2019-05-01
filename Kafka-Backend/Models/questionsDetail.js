const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var questionsdetail = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  question: { type: String },
  user: { type: Schema.Types.ObjectId, ref: "userDetails" },
  topic: { type: String },
  followers: [{ user: { type: Schema.Types.ObjectId, ref: "userDetails" } }],
  answers: [{ type: Schema.Types.ObjectId, ref: "answersdetail" }],
  postDate: { type: Date }
});

module.exports = mongoose.model("questionsdetail", questionsdetail);