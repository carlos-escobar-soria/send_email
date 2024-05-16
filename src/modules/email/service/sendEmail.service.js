const configEmail = require("../config/configEmail");
const nodemailer = require("nodemailer");

const sendEmailService = async(dataBody) => {
    let {mail, mails, subject, textMessage, template } = dataBody;
    try {
        const message = {
            from: `Corporacion Carlitos 👻 <${mail}>`,
            to: mails.join(' '),
            subject: subject,
            text: textMessage,
            html: template,
            headers: {'My-Custom-Header': 'header value'},
            date: new Date('2000-01-01 00:00:00')
        }
        const transport = nodemailer.createTransport(configEmail);
        const info = await transport.sendMail(message);
        return info;
    } catch (error) {
        throw new Error(error);
    }
}


module.exports = sendEmailService;