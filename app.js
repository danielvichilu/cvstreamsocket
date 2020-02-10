const express = require('express');
const app = express();
let broadcaster;
let server;
let port;
  const http = require('http');
  server = http.createServer(app);
  port = process.env.PORT || 3000;

const io = require('socket.io')(server);
app.use(express.static(__dirname + '/public'));
io.sockets.on('error', e => console.log(e));
io.sockets.on('connection', function (socket) {
  socket.on('image11',(image)=>{
     io.emit('data11', image)
   
  });
   socket.on('image12',(image)=>{
     io.emit('data12', image)
   
  });
  socket.on('image13',(image)=>{
    io.emit('data13', image)
  
 });
    socket.on('image14',(image)=>{
    io.emit('data14', image)
  
 });
});

