import React, { useState } from "react";

const ChatFooter = () => {
  const [message, setMessage] = useState("");

  const handleMessage = (event) => {
    event.preventDefault();
    console.log({
      user: localStorage.getItem("user"),
      message,
    });
    setMessage("");
  };

  return (
    <div className="chat-footer">
      <form className="form" onSubmit={handleMessage}>
        <input
          type="text"
          placeholder="Enter a message"
          className="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button className="send-btn">Send</button>
      </form>
    </div>
  );
};

export default ChatFooter;
