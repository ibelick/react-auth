const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: String,
  text: String
})

module.exports = mongoose.model('Post', PostSchema)
