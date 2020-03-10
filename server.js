if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';

const express = require('express');
const morgan = require('morgan'); // logging
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const config = require('./config');
const PORT = config.PORT[process.env.NODE_ENV] || process.env.PORT;
const router = require('./routes/index');

let db = 'mongodb://dentednerd:ForTheHorde678@ds227045.mlab.com:27045/ncnews-mongo';

if (process.env.NODE_ENV === 'test') {
  db = 'mongodb://localhost/northcoders-news-api-test';
}

mongoose.connect(db, function(err) {
  if (!err) console.log(`Successfully connected to ${db}`);
}).catch((err) => console.log(`Error connecting to ${db}:`, err));

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '/client/build')));
app.use('/api', router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, function() {
  console.log(`Express server listening on port ${PORT}`);
});

module.exports = app;
