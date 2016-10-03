const io = require("socket.io")(Picker);
io.on('connection', function(socket){
	console.log('socket', 'connection');

  socket.on('disconnect', function(){
		console.log('socket', 'disconnection');
  });
});