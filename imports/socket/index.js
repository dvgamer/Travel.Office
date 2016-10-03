import http from 'http';
import socket from 'socket.io';

const PORT = 8131;
var allowedOrigins = "*";

Meteor.startup(() => {
  const server = http.createServer();
  const io = socket(server);
  let counter = 0;

  // New client
  io.on('connection', function(socket) {
    console.log('new socket client');
  });

  try { server.listen(PORT); } catch (e) { console.error(e); }
});