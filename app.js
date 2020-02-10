const express = require('express');
const app = express();
let server;
  const http = require('http');
  server = http.createServer(app);
  port = process.env.PORT || 3000;

const io = require('socket.io')(server);
app.use(express.static(__dirname + '/public'));
io.sockets.on('error', e => console.log(e));
io.sockets.on('connection', function (socket) {
  socket.on('image11',(image)=>{ //receive video capture from second raspberry
     io.emit('data11', image) //send captured image to browser
   
  });
});

