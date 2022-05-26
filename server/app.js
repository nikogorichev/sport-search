// dotenv (npm i dotenv) подключается также в .sequelizerc
require('dotenv').config();
const express = require('express');
const config = require('./config/config');

const app = express();

const PORT = process.env.PORT ?? 4000;

const profileRouter = require('./routes/profile.route');

config(app);

// app.get('/', (req, res) => {
//   res.send('VSE OK');
// });

app.use('/profile', profileRouter);

app.listen(PORT, () => {
  console.log(`***Server started at ${PORT} PORT***`);
});
