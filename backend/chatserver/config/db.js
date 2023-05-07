const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://mrunali:mrunalibind@cluster0.tsxywrf.mongodb.net/Chatify?retryWrites=true&w=majority")

module.exports = {connection}