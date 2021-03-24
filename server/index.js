const app = require("./api/app");
const port = 8000;
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

// app.get("/", (req, res) => {
//   res.sendFile(__public + "/index.html");
//   console.log(__public);
// });

io.on("connection", (socket) => {
  console.log(`user ${socket} has connected`);
  socket.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
    console.log("SOCKET_DATA", message);
    io.emit("client-message", "message sent");
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

io.on("sent", (socket) => {
  socket.broadcast.emit("hello", "world");
});

http.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
