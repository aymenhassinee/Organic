/*const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const orderController = require('./controllers/order.controller');

const app = express();

// Configure mongoose and connect to your MongoDB instance
mongoose.connect('mongodb://0.0.0.0:27017/db2', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({
  extname:'hbs',
  defaultLayout:'mainLayout',
  layoutsDir:__dirname+'/views'
}));
app.set('view engine', 'hbs');

app.use('/', orderController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
*/

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const orderController = require('./controllers/order.controller');

const app = express();

// Configure mongoose and connect to your MongoDB instance
mongoose.connect('mongodb://0.0.0.0:27017/db2', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));


app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "mainLayout"}));
app.set('view engine', 'hbs');

app.use('/', orderController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
