
let socket_io = require('socket.io');
let io = socket_io();
let socketAPI = {};
//Your socket logic here
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });

  socket.on('clientSendToServer', (msg) => {
    console.log(msg)
    socket.broadcast.emit('serverSendToClient', msg);
  });
});
socketAPI.io = io;
module.exports = socketAPI;
// https://socket.io/get-started/chat
// https://medium.com/@tomberwick/configuring-socketio-with-expressjs-generator-and-nodejs-b3812aad953a