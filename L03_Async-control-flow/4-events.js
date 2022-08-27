const button = document.getElementById('myButton');
const paragraph = document.getElementById('myParagraph')

button.addEventListener('click', (e) => {
  console.log(e.target.value);
  console.log('The button was clicked! ✅')

  paragraph.innerHTML = "The button was clicked!!!!"
})



console.log(button);