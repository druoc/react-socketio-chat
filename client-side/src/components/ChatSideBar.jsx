import React, { useState, useEffect } from "react";

const ChatSideBar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("newUserResponse", (data) => setUsers(data));
  }, [socket, users]);

  return (
    <div className="chat-sidebar">
      <h3 className="chatbar-header">Online users</h3>
      <div>
        <div className="user-list">
          {users.map((user) => (
            <p key={user.socketID}>{user.user}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatSideBar;
