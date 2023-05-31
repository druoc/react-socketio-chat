import React from "react";
import { useNavigate } from "react-router-dom";

const ChatMain = ({ messages }) => {
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
        {messages.map((message) =>
          message.name === localStorage.getItem("userName") ? (
            <div className="message-chats" key={message.id}>
              <p className="sender-name">You</p>
              <div className="message-sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="message-chats" key={message.id}>
              <p>{message.name}</p>
              <div className="message-recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}

        {/*user is typing prompt*/}
        <div className="message-status">
          <p>Someone is typing a message...</p>
        </div>
      </div>
    </>
  );
};

export default ChatMain;
