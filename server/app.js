// dotenv (npm i dotenv) подключается также в .sequelizerc
require('dotenv').config();
const express = require('express');
const config = require('./config/config');
const authRoute = require('./routes/auth.route');

const app = express();

const PORT = process.env.PORT ?? 4000;

config(app);

// app.get('/', (req, res) => {
//   res.send('VSE OK');
// });

app.use('/', authRoute);

app.listen(PORT, () => {
  console.log(`***Server started at ${PORT} PORT***`);
});
