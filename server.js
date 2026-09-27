require('dotenv').config();
const express = require('express');
const mongodb = require('./db/connect');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/', routes);

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Connected to Week2 and listening on ${port}`);
    });
  }
});