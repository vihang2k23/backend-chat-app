const Message = require('../models/messageModel');

exports.saveMessage = async (data) => {
    const message = new Message(data);
    return await message.save();
};

exports.getMessages = async () => {
    return await Message.find();
};
