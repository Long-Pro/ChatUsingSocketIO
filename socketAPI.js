
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