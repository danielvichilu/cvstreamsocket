const express = require('express');
const app = express();
let server;
let port;
  const http = require('http');
  server = http.createServer(app);
  port = process.env.PORT || 3000;

const io = require('socket.io')(server);
app.use(express.static(__dirname + '/dist'));
io.sockets.on('error', e => console.log(e));
io.sockets.on('connection', socket => {
   ['image11',
   'image12',
   'image13',
   'image14',
   'image21',
   'image22'
  ].forEach( cam_code => {
     //receive video capture from second raspberry
      socket.on(cam_code, image => {
        io.emit(cam_code, image)
      });
    });
 });
server.listen(port)                     
