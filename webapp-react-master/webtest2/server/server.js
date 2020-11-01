import config from './../config/config';
import app from './express';
import mongoose from 'mongoose';
import socketio from 'socket.io'
import http from 'http'
import User from './models/user.model'
import Message from './models/message.model'

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, { useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true } );

mongoose.connection.on('error', () => {
throw new Error(`unable to connect to database: ${mongoUri}`)})

/*const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})*/
const server = http.createServer(app)
const io = socketio(server)       
io.use(async (socket,next)=>{
    const token=socket.handshake.query.token;
    const tkn=JSON.parse(token)
    socket.userId=tkn.user._id;
    next();
})
io.on('connection', (socket)=>{
    console.log("new connection"+socket.userId);
    socket.on('disconnect',()=>{
        console.log("user disconnect");
    });
    socket.on("joinRoom",({chatroomid})=>{
        socket.join(chatroomid);
        console.log("user joined chat "+chatroomid);
    });
    socket.on('leaveRoom',({chatroomid})=>{
        socket.leave(chatroomid);
        console.log("user left chat "+chatroomid);
    });
    socket.on("chatroomMessage",async ({chatroomid,message})=>{
        if (message.trim().length > 0) {
        const user=await User.findOne({_id:socket.userId});
        const newMessage = new Message({
            chatroom:chatroomid,
            name:user.name,
            userId:socket.userId,
            message,
        });
            io.to(chatroomid).emit("newMessage",{
            message,
            name:user.name,
            userId:socket.userId,
        });
        await newMessage.save();
    }
    })
})
server.listen(config.port, (err) => {
    if (err) {
    console.log(err)
    }
    console.info('Server started on port %s.', config.port)
   })

