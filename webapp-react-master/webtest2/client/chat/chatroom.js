import React, { useState, useEffect } from 'react'
import {makeStyles} from '@material-ui/core/styles'
import io from "socket.io-client"
import auth from './../auth/auth-helper'
import TextField from '@material-ui/core/TextField'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'

import {list} from './api-chat'

const useStyles = makeStyles(theme => (
    {
        "chatroomPage": {
          "display": "grid",
          "alignItems": "center",
          "justifyContent": "center",
          "height": "100vh",
          "width": "100%",
          "margin": "-8px"
        },
        "chatroomSection": {
          "width": "80vw",
          "height": "80%",
          "margin": "auto",
          "border": "1px solid #eee",
          "borderColor":"black",
          "position": "relative",
          "backgroundColor":"#a0d2eb"
        },
        "chatroomContent": {
          "position": "absolute",
          "top": "2.5rem",
          "left": "0",
          "right": "0",
          "bottom": "3.5rem",
          "padding": "0.5rem",
          "overflow": "auto"
        },
        "chatroomActions": {
          "position": "absolute",
          "bottom": "0",
          "left": "0",
          "right": "0",
          "padding": "0.5rem",
          "display": "grid",
          "gridTemplateColumns": "1fr 72px",
          "gridGap": "1rem",
          "borderTop": "1px solid black"
        },
        "chatroomActions_button": {
          "height": "100%"
        },
        "message": {
          "marginBottom": "0.25rem"
        },
        "otherMessage": {
          "color": "#0099cc",
          "fontWeight": "bold"
        },
        "ownMessage": {
          "color": "#00cc00",
          "fontWeight": "bold",
        },
        "cardHeader": {
            "background": "#e5eaf5",
            "padding": "0.75rem 1.5rem",
            "borderRadius": "2px",
            "textTransform": "uppercase",
            "transform": "skewY(-4deg)",
            "fontSize": "1.1rem",
            "fontWeight": "bold",
            "display": "inline-block",
            "position": "absolute",
            "top": "-1rem",
            "left": "-0.75rem"
          },
          "join": {
            "background": "#f7c52a",
            "padding": "0.25rem 1rem",
            "borderRadius": "2px"
          },
          "input": {
            "border": "none",
            "padding": "0.5rem 0.1rem",
            "width": "100vw",
            "borderRadius": "2px",
            "borderBottom": "1px solid #eee",
            "transition": "all 0.5s"
          },
          "input_focus": {
            "borderBottom": "1px solid #ccc"
          },
          textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
          },
    }));

export default function chatroom({match}) {
const chatroomid=match.params.chatId
const classes = useStyles();
const [messages,setMessages]=useState([]);
const messageRef=React.useRef();
const [userId, setUserId] = React.useState("");
const [socket, setSocket] = React.useState(null);

useEffect(() => {   
  const abortController = new AbortController()
  const signal = abortController.signal
  const idcht=match.params.chatId
  list(idcht,signal).then((data) => {
  if (data && data.error) {
  console.log(data.error)
  } else {
  setMessages(data)}})
  return function cleanup(){
  abortController.abort()
  } }, []) 


const sendMessage = (event)=>{
  event.preventDefault();
    if(socket){
        socket.emit("chatroomMessage",{
            chatroomid,
            message:messageRef.current.value,
        });
        messageRef.current.value = "";
    };
}
const jwt = auth.isAuthenticated()
console.log(jwt)
if(socket==null){
const newsocket =io("http://localhost:3000",{
    query:{
        token:JSON.stringify(jwt)
    }
})
setSocket(newsocket); 
}
React.useEffect(() => {
    setUserId(jwt.user._id);
    if (socket) {
      socket.on("newMessage", (message) => {
        setMessages([...messages, message]);
      });
    }
    //eslint-disable-next-line
  }, [messages]);

  React.useEffect(() => {
    if (socket) {
      socket.emit("joinRoom", {
        chatroomid,
      });
    }

    return () => {
      if (socket) {
        socket.emit("leaveRoom", {
          chatroomid,
        });
      }
    };
    //eslint-disable-next-line
  }, []);
    return (
        <div className={classes.chatroomPage}>
      <div className={classes.chatroomSection}>
        <div className={classes.cardHeader}>Chat</div>
        <div className={classes.chatroomContent}>
          {messages.map((message, i) => (
            <div key={i} className="message">
            
              <span
                className={
                  userId === message.userId ? classes.ownMessage : classes.otherMessage
                }
              ><Avatar src={'/api/users/photo/'+message.userId+'?'+new Date().getTime()}/>
                {message.name} 
              </span>{": "}
              {message.message}
            </div>
          ))}
        </div>
        <div className={classes.chatroomActions}>
          <div>
          <input
          style={{ width:"100%" ,height:"80%"}}
              type="text"
              name="message"
              placeholder="Say something!"
              ref={messageRef}
            />
          </div>
          <div>
            <Button variant="contained" color="primary" className="join" onClick={event=>sendMessage(event)}>
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
    
}