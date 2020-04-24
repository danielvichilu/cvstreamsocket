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
     io.emit('image12', image)
  });
  
  socket.on('image13',(image)=>{
    io.emit('image13', image)
  
 });
    socket.on('image14',(image)=>{
    io.emit('image14', image)
  
 });
    socket.on('image21',(image)=>{
    io.emit('image21', image)
  
 });
    socket.on('image22',(image)=>{
    io.emit('image22', image)
});
socket.on('error1',(data)=>{
  io.emit('errorr', data)
});
})
server.listen(port, () => console.log(`http://localhost:${port}`+ '/mix.html',))
                          console.log(`http://localhost:${port}`+ '/index.html',);
