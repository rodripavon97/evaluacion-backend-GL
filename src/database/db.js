const mongoose = require('mongoose')
// const Fruit = require("../models/fruitsModel.js");
console.log("conect a moongoose")
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("base de datos conectada"))


// module.exports = mongoose