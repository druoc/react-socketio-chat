import React from "react";
import ChatSideBar from "./ChatSideBar";
import ChatMain from "./ChatMain";
import ChatFooter from "./ChatFooter";

const ChatPage = ({ socket }) => {
  return (
    <div className="chat">
      <ChatSideBar />
      <div className="chat-main">
        <ChatMain />
        <ChatFooter />
      </div>
    </div>
  );
};

export default ChatPage;
