import React from "react";

const CustomApp = () => {
    // example props 
    const msgProps:ChatMsgProps ={
        message:'hi how are you',
        sender:'nitesh',
        timestamp:'12:00 PM'
    }
  return (
    <>
    <ChatMsg {...msgProps}/>
    </>
  )
};

export default CustomApp;

interface ChatMsgProps {
  message: string;
  sender: string;
  timestamp: string;
}

const ChatMsg:React.FC<ChatMsgProps> = ({ message, sender, timestamp }) => {
  return (
    <>
      <div className="chat-message">
        <div className="message-sender">{sender}</div>
        <div className="message-content">{message}</div>
        <div className="message-timestamp">{timestamp}</div>
      </div>
    </>
  );
};
