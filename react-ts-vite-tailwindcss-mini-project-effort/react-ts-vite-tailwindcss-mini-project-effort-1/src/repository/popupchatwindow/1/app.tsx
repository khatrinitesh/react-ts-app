import React, { useState } from "react";
import './style.css';

const CustomApp = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen)
    }
  return <>
     <button onClick={toggleChat}>Toggle Chat</button>
    <ChatWindowApp isOpen={isChatOpen} onClose={toggleChat}/>
  </>;
};

export default CustomApp;

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatWindowApp: React.FC<ChatWindowProps> = ({ isOpen, onClose }) => {
  if (isOpen) return null;
  return (
    <>
      <div className="chat-window">
        <div className="header">
          <h2>Chat</h2>
          <button onClick={onClose}>&times;</button>
        </div>
        <div className="messages">{/* Messages will be displayed here */}</div>
        <div className="input-area">
          <input type="text" placeholder="Type your message..." />
          <button>Send</button>
        </div>
      </div>
    </>
  );
};
