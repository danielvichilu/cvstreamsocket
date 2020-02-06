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
  socket.on('image21',(image)=>{
    io.emit('data21', image)
  
 });
    socket.on('image22',(image)=>{
    io.emit('data22', image)
  
 });
});
server.listen(port, () => console.log(`http://localhost:${port}`+ '/mix.html',))
                          console.log(`http://localhost:${port}`+ '/index.html',);
