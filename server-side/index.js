const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const http = require("http").Server(app);
const cors = require("cors");

let userArray = [];

app.use(cors());

const socketIO = require("socket.io")(http, {
  cors: {
    origin: "https://socketiochatfe.onrender.com",
  },
});

socketIO.on("connection", (socket) => {
  console.log(`${socket.id} user is online!`);

  socket.on("message", (data) => {
    socketIO.emit("messageResponse", data);
  });

  socket.on("newUser", (data) => {
    userArray.push(data);
    socketIO.emit("newUserResponse", userArray);
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id} just disconnected...oh dear`);
    userArray = userArray.filter((user) => user.socketID !== socket.id);
    socketIO.emit("newUserResponse", userArray);
  });
});

app.get("/api", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
