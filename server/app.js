// dotenv (npm i dotenv) подключается также в .sequelizerc
require('dotenv').config();
const express = require('express');
const config = require('./config/config');
const placeRouter = require('./routes/place.route');
const eventsRouter = require('./routes/events.router');
const authRoute = require('./routes/auth.route');
const participantRoute = require('./routes/participant.route');
const mapRouter = require('./routes/map.route');
const app = express();

const PORT = process.env.PORT ?? 4000;

const profileRouter = require('./routes/profile.route');

config(app);

app.use('/place', placeRouter);
app.use('/placesmap', mapRouter);
app.use('/events', eventsRouter);
app.use('/profile', profileRouter);
app.use('/participant', participantRoute);
app.use('/', authRoute);

app.listen(PORT, () => {
  console.log(`***Server started at ${PORT} PORT***`);
});
