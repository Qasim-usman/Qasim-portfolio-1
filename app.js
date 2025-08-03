// app.js
const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware for serving static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
=======
const express = require("express");
const app = express();
const path = require("path");

// Middlewares
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// ✅ Routes should come before 404
const mainJS = require("./routes/main");
app.use("/", mainJS);

// ✅ 404 handler — always last
app.use((req, res) => {
  res.status(404).render("404");
});

// ✅ Start server
app.listen(3000, '0.0.0.0', () => {
  console.log("Server chal raha hai port 3000 par (LAN access enabled)");
});

