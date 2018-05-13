var socket = require('socket.io');
var express = require('express');

var app = express();
var server = app.listen(3000 , function() {
  console.log('server started on port 3000');
})
app.use(express.static('public'));
var io = socket(server);



io.on('connection',function(socket) {
    console.log('made new connection at ',socket.id);

    socket.on('chat',function(data) {
       console.log(data);
      io.sockets.emit('chat',data);

    });

      socket.on('typing',function(data){
      socket.broadcast.emit('typing',data);
    })
})
