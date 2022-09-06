/*
  Elements to access

  <button id="load-films-btn">Load films!</button>
  <ul id="list-of-films-ul"></ul>
*/

const $button = $('#load-films-btn');
const $ul = $('#list-of-films-ul');

// console.log($button, $ul);

const GHIBLI_API = 'https://ghibliapi.herokuapp.com/dogs/';

$button.click((event) => {
  $.ajax({
    url: GHIBLI_API,
    success: (films) => {
      
      for (const film of films) {
        $ul.append(`
          <li>
            <h3>${film.title} (${film.original_title})</h3>
            <img width="200" src="${film.movie_banner}">
            <p>${film.description}</p>
          </li>
      `)
      }
    },
    error: (err) => {
      console.log(err)
      $ul.append('An error occurred :(')
    },
  })

})