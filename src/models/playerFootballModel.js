const mongoose = require("mongoose");

const { Schema } = mongoose;

const playerFootballModel = new Schema({
  firstName: { type: String, required: true, maxLength: 40 },
  lastName: { type: String, required: true, maxLength: 30 },
  nationality: { type: String, required: true, maxLength: 30 },
  dateOfBirth: { type: Date, required: true },
  club: { type: String, maxLength: 30, required: true },
  codeFifa: { type: Number, required: true, unique: true },
});

playerFootballModel.path("dateOfBirth") instanceof Date 
module.exports = mongoose.model("PlayerFootball", playerFootballModel);
