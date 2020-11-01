import mongoose from 'mongoose'
const ChatSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Chat can't be empty"
  },
  likes: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
  chatBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
  chatTo: {type: mongoose.Schema.ObjectId, ref: 'User'},
  created: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('chat', ChatSchema)