const dotenvConfig = require('dotenv');
dotenvConfig.config();

const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser');
const app = express();
const port = process.env.APP_PORT ;
app.use(bodyParser.json());

app.get('/api',(request, response, next) => {
    return response.send("hola carlos");
})

app.use('/api', require('./modules/email/routes/sendEmail'))

app.listen(port , () => console.log(`http://localhost:${port}`));

