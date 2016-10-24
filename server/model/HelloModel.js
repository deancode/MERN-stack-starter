const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HelloSchema = new Schema({
  title: String,
  isCool: Boolean,
  age: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Hello', HelloSchema);

