const express = require('express');
const chatRoutes = require('./routes/chatRoutes');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(express.json());
app.use('/api/chat', chatRoutes);

module.exports = app;
