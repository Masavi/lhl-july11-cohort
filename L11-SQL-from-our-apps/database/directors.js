const getDirectors = (pool) => {
  return pool.query('SELECT * FROM directors');
}

const insertDirector = (pool, body) => {
  const { first_name, last_name, country } = body;

  const sql = "INSERT INTO directors (first_name, last_name, country) \
                VALUES($1, $2, $3) \
                RETURNING *"

  return pool.query(sql, [first_name, last_name, country]);
}

const getDirectorsJoinMovies = (pool) => {
  const sql = "SELECT directors.last_name AS director, movies.title AS movie FROM directors \
                JOIN movies ON movies.directed_by=directors.id"

  return pool.query(sql);
}

module.exports = {
  getDirectors,
  insertDirector,
  getDirectorsJoinMovies,
}