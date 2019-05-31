const express = require('express')
const app = express();
//pdf lib
//http://pdfkit.org/

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});