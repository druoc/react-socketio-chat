import React from "react";
import { useNavigate } from "react-router-dom";

const ChatMain = () => {
  const navigation = useNavigate();

  const handleUserLeave = () => {
    localStorage.removeItem("user");
    navigation("/");
    window.location.reload();
  };

  return (
    <>
      <header className="chat-header">
        <h4>Socket.IO chatroom</h4>
        <button className="leave-btn" onClick={handleUserLeave}>
          Leave chat
        </button>
      </header>
      {/*messages sent by the user*/}
      <div className="message-container">
        <div className="message-chats">
          <p className="sender-name">Me</p>
          <div className="message-sender">
            <p>Hello there!</p>
          </div>
        </div>
        {/*messages received*/}
        <div className="message-chats">
          <p>Other</p>
          <div className="message-recipient">
            <p>I'm good fam</p>
          </div>
        </div>
        {/*user is typing prompt*/}
        <div className="message-status">
          <p>Someone is typing a message...</p>
        </div>
      </div>
    </>
  );
};

export default ChatMain;
