// app.js
const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

// Middlewares
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Routes should come before 404
const mainJS = require('./routes/main');
app.use('/', mainJS);

// ✅ 404 handler — always last
app.use((req, res) => {
  res.status(404).render('404');
});

// ✅ Start server
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server chal raha hai port ${port} par (LAN access enabled)`);
});
