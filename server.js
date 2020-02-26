const express = require('express');
const path = require('path');

const publicDirectoryPath = path.join(__dirname, 'public');
const port = process.env.PORT || 3000;

const app = express();
app.use(express.static(publicDirectoryPath));
app.use(express.json({limit: '100kb'}));

app.post('/hostGame', (req, res) => {
  const username = req.body.username;
  res.setHeader('Content-Type', 'application/json');
  res.send({username, gameID: Math.floor(Math.random() * 100000)});
});

app.listen(port, () => console.log(`server is listening on port ${port}`));
