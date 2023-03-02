const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: false}));

require('./controllers/index')(app);

app.listen(3000);


