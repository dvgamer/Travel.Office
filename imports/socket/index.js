import http from 'http';
import socket from 'socket.io';

const PORT = 81;

var express = require('express');
var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  next();
});


Meteor.startup(() => {
  const server = http.createServer(app);
  const io = socket(server, { log: false, origins: '*:*' });

  // New client
  let counter = 0;
  io.on('connection', function(socket) {
  	counter++;
   	console.log(`[${counter}] SOCKET -- ${socket.id} is connected.`);
    socket.on('disconnect', function() {
    	counter--;
   		console.log(`[${counter}] SOCKET -- ${this.id} disconnected.`);
    });
  });

  try { server.listen(PORT); } catch (e) { console.error(e); }
});