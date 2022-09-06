const $form = $('#search-form');
const $searchField = $('#search-term-field');
const $ul = $('#libraries-list');

$form.on('submit', (event) => {
  event.preventDefault();
  const searchTerm = $searchField.val();
  const CDN_API = `https://api.cdnjs.com/libraries?search=${searchTerm}`

  $.ajax({
    url: CDN_API,
    success: (response) => {
      const libraries = response.results;
      let outputHTML = '';

      for (const library of libraries) {
        outputHTML += `
          <li>
            <a href="${library.latest}">
              ${library.name}
            </a>
          </li>
        `
      }

      $ul.html(outputHTML)
    },
    error: (err) => console.error(err),
  })
})