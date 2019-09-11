import socketio, { Socket } from 'socket.io';

const io = socketio('http://127.0.0.0:3000');
io.on('connection', (socket: Socket) => {
  socket.on('connect', () => {
    console.log('client connected to server');
    console.log('emit login');
    socket.emit('/login', 'hi');
  });
  socket.on('disconnect', () => {
    console.log('client disconnect');
  });
});
