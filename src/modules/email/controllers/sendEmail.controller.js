const sendEmailService = require("../service/sendEmail.service");

const sendEmail = async (reques, response, next) => {
    const dataBody = reques.body;
    return response.send(await sendEmailService(dataBody));
}

module.exports = sendEmail;