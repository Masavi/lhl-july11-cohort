import { useState } from 'react';

const MovieStore = () => {
  const [movies, setMovies] = useState(['Titanic', 'Matrix']);
  const [newMovie, setNewMovie] = useState('');

  const handleInputChange = (event) => {
    setNewMovie(event.target.value);
  }

  const addMovie = () => {
    const moviesCopy = [...movies];
    moviesCopy.push(newMovie)
    setMovies(moviesCopy);
  }

  return (
    <div>
      <h2>Movies</h2>
      <input
        type="text"
        value={newMovie}
        onChange={handleInputChange} />
      <button onClick={addMovie}>
        Add movie
      </button>

      {
        movies.map((movie, index) => {
          return (
            <h3 key={index}>
              { movie }
            </h3>
          )
        })
      }
    </div>
  );
}

export default MovieStore;
