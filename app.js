const express = require('express');
const pageController = require('./controllers/pageController');
const pageRoute = require('./routes/pageRoute')
const app = express();

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(express.static('public'));

//ROUTES
app.use ('/', pageRoute);



const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
