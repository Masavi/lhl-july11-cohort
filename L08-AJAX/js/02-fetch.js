const ul = document.getElementById('films-list')

function requestMovies() {
  const GHIBLI_API = 'https://ghibliapi.herokuapp.com/films/';
  fetch(GHIBLI_API)
    .then((response) => { return response.json() })
    .then((films) => {
      console.log('This is the data\n', films);

      for (const film of films) {
        ul.innerHTML += `
          <li>
            <h3>${film.title} (${film.original_title})</h3>
            <img width="200" src="${film.movie_banner}">
            <p>${film.description}</p>
          </li>
        `
      }
    })
    .catch((err) => console.log('An error occurred :('))
}

