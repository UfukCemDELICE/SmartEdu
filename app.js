const express = require('express');
const mongoose = require('mongoose');
const pageController = require('./controllers/pageController');
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');
const app = express();
//CONNECT DB
mongoose
  .connect('mongodb://localhost/smartEdu-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Db connected');
  });
//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(express.static('public'));

//ROUTES
app.use('/', pageRoute);
app.use('/courses', courseRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
