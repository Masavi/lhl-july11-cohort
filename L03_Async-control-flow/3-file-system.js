const fs = require('fs')

console.log('Sinchronous code starts here...')

fs.readFile('./message.txt', { encoding: 'utf-8' }, (error, data) => {
  console.log('finished reading file! 📗')
  console.log(data);
})

fs.writeFile('./myfile.txt', file, () => {
  console.log('Finished writing the file!')
})

console.log('Sinchronous code ends here 😂')

