import "./App.css";
import socketIO from "socket.io-client";

const socket = socketIO.connect("http://localhost:4000");

const App = () => {
  return <h1>Hello!</h1>;
};

export default App;
