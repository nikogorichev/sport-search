// dotenv (npm i dotenv) подключается также в .sequelizerc
require('dotenv').config();
const express = require('express');
const config = require('./config/config');
const placeRouter = require('./routes/place.routes');
const eventsRouter = require('./routes/events.router');
const authRoute = require('./routes/auth.route');
const participantRoute = require('./routes/participant.route');

// добавлять файлы на сайт
const fileUpload = require('express-fileupload');


const app = express();

const PORT = process.env.PORT ?? 4000;

const profileRouter = require('./routes/profile.route');

config(app);

// добавлять файлы на сайт
app.use(fileUpload(
  // { createParentPath: true,}
  ));
app.use(express.static('./public'))

app.use('/place', placeRouter);
app.use('/events', eventsRouter);
app.use('/profile', profileRouter);
app.use('/participant', participantRoute);
app.use('/', authRoute);

app.listen(PORT, () => {
  console.log(`***Server started at ${PORT} PORT***`);
});
