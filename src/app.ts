import http from 'http';
import koa from 'koa';
import socketio, { Server as IO, Socket } from 'socket.io';

export class App {
  app: any;
  io: IO;
  httpServer: any;

  constructor() {
    this.app = new koa();
    this.httpServer = http.createServer(this.app.callback());
    this.io = socketio(this.httpServer);
    this.initKoa();
    this.initSocket();
  }

  initKoa() {
    let visitCount = 0;
    this.app.use((ctx: any) => {
      ctx.body = 'hello world';
      console.log('visited ' + ++visitCount);
    });
  }

  initSocket() {
    this.io.on('connection', (socket: Socket) => {
      socket.on('/login', (ctx: any) => {
        console.log('user login with: ' + ctx);
      });
    });
  }

  listen(port: number) {
    this.httpServer.listen(port, () => {
      console.log('server started at ' + port);
    });
  }
}

export default new App();
