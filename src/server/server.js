menuList = require('../menuList');

const fs = require('fs');

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan(':method :url :status :res[content-length] :response-time :data'));

morgan.token('data', (req, res) => {
  return JSON.stringify(req.body);
});

// let's pretend it's a database
const saveData = (data) => {
  const filePath = 'src/server/data.txt';
  fs.writeFileSync(filePath, JSON.stringify(data));
};
//

app.get('/elyshop', (request, response) => {
  response.json(menuList);
});

app.post('/elyshop', (request, response) => {
  saveData(request.body);
  response.status(202).end();
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
