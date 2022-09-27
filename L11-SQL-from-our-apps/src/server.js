const express = require('express');
const pool = require('../database/pool');
const Directors = require('../database/directors');

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5050;

app.get("/directors", (req, res) => {
  Directors.getDirectors(pool)
    .then((response) => {
      console.log(response.rows)
      res.json(response.rows);
    })
    .catch((error) => console.log(error))
});

app.post("/directors", (req, res) => {
  Directors.insertDirector(pool, req.body)
    .then((response) => {
      console.log(response.rows)
      res.status(200).json(response.rows);
    })
    .catch((error) => {
      res.status(400).send('Something went wrong...')
    })
});

app.get("/movies-directed", (req, res) => {
  Directors.getDirectorsJoinMovies(pool)
    .then((response) => {
      console.log(response.rows)
      res.json(response.rows);
    })
    .catch((error) => console.log(error))
});

app.get("/hello", (req, res) => {
  res.send("Hello, July 11 Cohort! 🤠");
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}/`);
});