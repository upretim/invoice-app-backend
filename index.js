var cors = require('cors');
const express = require('express');
var bodyParser = require('body-parser')


const app = express();
app.use(cors());
app.use(bodyParser.json());
//pdf lib
//http://pdfkit.org/

const users =
      [{ 
        id: 1, 
        username: 'Test@test',
          password: 'test',
          firstName: 'Manoj',
          lastName: 'User'
        }];
 
app.post('/login', (req, res) => {
  console.log('username is ', req.body.username);
  console.log('Password is ', req.body.password);

   if (req.body.username =='Test@test' && req.body.password == 'test' ){
       const user = 'Manoj';
       res.status(200).send(user);
   }
   else {
    res.status(404).send(null);
   }
      
});

app.listen(5000, () => {
  console.log('Example app listening on port 5000!')
});





