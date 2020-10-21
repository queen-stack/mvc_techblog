const express = require('express');
const session = require("express-session");
const hbs = require('express-handlebars'); 
const sequelize = require('./config/connection')
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: "asfd09aq8w7r",
    db: sequelize,
    resave: false,
  })
);
app.use(routes);
app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});