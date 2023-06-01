import "./App.css";
import socketIO from "socket.io-client";
import HomePage from "./components/HomePage";
import ChatPage from "./components/ChatPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const socket = socketIO.connect("https://socketio-chat-e4l2.onrender.com");

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage socket={socket} />}></Route>
          <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
