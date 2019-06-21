const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const loginRoute = require('./api/routes/login.route');
const invoiceRoute = require('./api/routes/invoice.routes')
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true }
).then((db) => {
  console.log('DB Connected');
})
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});

 app.use('/login', loginRoute);
 
 app.use('/invoices', invoiceRoute);


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});





