const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'User',
  },
  title: String,
  text: String,
  created: Date
})

module.exports = mongoose.model('Post', PostSchema)
