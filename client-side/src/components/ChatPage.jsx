import React, { useState, useEffect } from "react";
import ChatSideBar from "./ChatSideBar";
import ChatMain from "./ChatMain";
import ChatFooter from "./ChatFooter";

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on(
      "messageResponse",
      (data) => {
        setMessages([...messages, data]);
      },
      [socket, messages]
    );
  });

  return (
    <div className="chat">
      <ChatSideBar socket={socket} />
      <div className="chat-main">
        <ChatMain messages={messages} />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;
