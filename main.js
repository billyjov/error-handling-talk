const express = require('express');
const app = express();
const port = 3000;

const logs = [];

app.post('/logs', (req, res) => {
  console.log(req.body);
  logs.push(req.body);

  console.log(logs);


  res.status(200).send({
    message: 'Log received'
  });
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
