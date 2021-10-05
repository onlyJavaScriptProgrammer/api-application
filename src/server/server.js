const express = require('express');

const app = express();
const PORT = 4000;

const getStartOfSrever = () => {
  try {
    app.get('/', (req, res) => {
      res.sendFile('C:/Users/vladi/Desktop/projects/vue/rocketsales/public/index.html');
    });
  } catch (error) {
    console.log(error);
  }
}

getStartOfSrever();

app.listen(PORT);
