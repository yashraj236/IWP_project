import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
  chatroom: {
    type: String,
    required: "Chatroom is required!",
    ref: "Chatroom",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: "Chatroom is required!",
    ref: "User",
  },
  message: {
    type: String,
    required: "Message is required!",
  },
  name:{
    type: String,
    required:'name required'
  }
});

export default mongoose.model('chat', messageSchema)