const express = require('express');

const app = express();
//TEMPLATE ENGINE
app.set('view engine', 'ejs');
//MIDDLEWARE
app.use(express.static("public"));
//ROUTES

app.get('/', (req, res) => {
  res.status(200).render('index', {
    page_name: "index"
  });
});
app.get('/about', (req, res) => {
  res.status(200).render('about', {
    page_name: "about"
  });
});
app.get('/courses', (req, res) => {
  res.status(200).render('courses', {
    page_name: "courses"
  });
});
app.get('/dashboard', (req, res) => {
  res.status(200).render('dashboard', {
    page_name: "dashboard"
  });
});
app.get('/contact', (req, res) => {
  res.status(200).render('contact', {
    page_name: "contact"
  });
});
app.get('/login', (req, res) => {
  res.status(200).render('login', {
    page_name: "login"
  });
});
app.get('/register', (req, res) => {
  res.status(200).render('register', {
    page_name: "register"
  });
});
const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
