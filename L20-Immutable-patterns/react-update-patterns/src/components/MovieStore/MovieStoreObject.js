import { useState } from 'react';

const MovieStore = () => {
  const [state, setState] = useState({
    movies: ['Titanic', 'Matrix'],
    newMovie: '',
  })

  const handleInputChange = (event) => {
    const stateCopy = { ...state, newMovie: event.target.value }
    setState(stateCopy);
  }

  const addMovie = () => {
    setState((prev) => {
      return {
        ...prev,
        movies: [...prev.movies, state.newMovie]
      }
    })
  }

  return (
    <div>
      <h2>Movies</h2>
      <input
        type="text"
        value={state.newMovie}
        onChange={handleInputChange} />
      <button onClick={addMovie}>
        Add movie
      </button>

      {
        state.movies.map((movie, index) => {
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
