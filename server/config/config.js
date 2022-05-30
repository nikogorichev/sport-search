const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const FileStore = require('session-file-store')(session);
const path = require('path');
const { cookiesCleaner, local } = require('../middleware/auth');

const sessionConfig = {
  store: new FileStore(),
  name: 'sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'elbrus_bears', // Секретное слово для шифрования, может быть любым
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

const config = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(fileUpload());
  app.use('/images', express.static(path.join(__dirname, 'images')));
  app.use(cookieParser());
  app.use(cors());
  app.use(session(sessionConfig));
  app.use(cookiesCleaner);
  app.use(local);
};

module.exports = config;
