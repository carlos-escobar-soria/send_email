const dotenvConfig = require('dotenv');
const express = require('express')
const bodyParser = require('body-parser');
const app = express();

const port = process.env.APP_PORT ;

dotenvConfig.config();

app.use(bodyParser.json());

app.use('/api', require('./modules/email/routes/sendEmail'))

app.listen(port , () => console.info(`http://localhost:${port}`));

