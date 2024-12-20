const chatController = require('../controllers/chatController');

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('User connected:', socket.id);

        socket.on('chat message', async (msg) => {
            const message = await chatController.saveMessage(msg);
            io.emit('chat message', message);
        });

        socket.on('disconnect', () => {
            console.log('User disconnected:', socket.id);
        });
    });
};
