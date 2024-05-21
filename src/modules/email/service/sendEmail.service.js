const configEmail = require("../config/configEmail");
const nodemailer = require("nodemailer");
const templateHello = require("../template/template");

const sendEmailService = async(dataBody) => {
    let { mail, mails, subject, textMessage } = dataBody;
    try {
        const message = {
            from: `Corporacion Carlitos 👻 <${mail}>`,
            to: mails.join(' '),
            subject: subject,
            text: textMessage,
            html: templateHello('Hello Word'),
            headers: {'My-Custom-Header': 'header value'},
            date: new Date().now()
        }
        const transport = nodemailer.createTransport(configEmail);
        const info = await transport.sendMail(message);
        return info;
    } catch (error) {
        throw new Error(error);
    }
}


module.exports = sendEmailService;