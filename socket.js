const SocketIO = require('socket.io');

module.exports = (server, app, sessionMiddleware) => {
    const io = SocketIO(server, {path : '/socket.io'});
    app.set('io', io);
    const room = io.of('/room');

    const wrap = middleware => (socket,next) => middleware(socket.request, {}, next);
    //chat.use(wrap(sessionMiddleware);

    room.on('connection', (socket) => {
        console.log('room namespace - 접속');
        socket.on('disconnect', () => {
            console.log('room namespace - 접속 해제');
        });
    });
}