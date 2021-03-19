const app = require('./api/app');
const port = 8000;
const http = require('http').createServer(app)
const io = require('socket.io')(http, {
  cors: {
    origin: '*'
  }
});
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

app.get('/', (req, res) => {
  res.sendFile(__public + '/index.html');
});

io.on('connection', (socket) => {
  console.log(`user ${socket} has connected`)
  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    console.log('SOCKET_DATA', data)
    io.emit(NEW_CHAT_MESSAGE_EVENT, data)
  })
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

io.on("sent", (socket) => {
  socket.broadcast.emit("hello", "world");
});

http.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
