const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authRouter = require('../Auth/auth-router');
const userRouter = require('../users/users-router');


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server .use('/api/auth', authRouter);
server.use('/api/users', userRouter);

module.exports = server;