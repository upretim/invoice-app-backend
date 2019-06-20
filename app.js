const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const loginRoute = require('./api/routes/login.route');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

// MONGO_URI = mongodb://manojkumar.upreti@live.com:Mongo#123@cluster0-shard-00-00-pig9s.mongodb.net:27017,cluster0-shard-00-01-pig9s.mongodb.net:27017,cluster0-shard-00-02-pig9s.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true
    }
)
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});

app.use('/login', loginRoute);


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});





