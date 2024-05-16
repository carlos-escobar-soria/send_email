const express = require('express');
const sendEmail = require('../controllers/sendEmail.controller');
const routeSendEmail = new express.Router();

routeSendEmail.post('/send', sendEmail);

module.exports = routeSendEmail;