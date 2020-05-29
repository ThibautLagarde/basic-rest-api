const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const myModelRoutes = require('./routes/myModelRoutes');

const apiname = 'basic-rest-api';
const hostname = '127.0.0.1';
const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

mongoose.connect(`mongodb://localhost:27017/${apiname}`, {useNewUrlParser: true, useUnifiedTopology: true});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.use('/api/myModel', myModelRoutes);