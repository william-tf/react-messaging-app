const app = require('./api/app');
const port = 8000;
const http = require('http').createServer(app)
const io = require('socket.io')(http, {
  cors: {
    origin: '*'
  }
});

app.get('/', (req, res) => {
  res.sendFile(__public + '/index.html');
});

io.on('connection', (socket) => {
  console.log("user connected")
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
