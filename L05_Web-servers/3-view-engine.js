const express = require('express');
const app = express();
const PORT = 5000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const data = {
    message: 'This is coming from the app.get(/) url',
    date: '16-08-2022'
  }

  res.render('index', data);
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
