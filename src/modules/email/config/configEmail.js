const service = require("../../../utils/nameService");

const configEmail = {
    host: service.smtp,
    port: process.env.EMAIL_PORT,
    secure: true, 
    tls: {
        rejectUnauthorized: false
    },
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    }
}
module.exports = configEmail;