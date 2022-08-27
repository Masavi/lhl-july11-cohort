const myFunction = () => {
  console.log('✅ Hello');
}

// myFunction();

const higherOrderFunction = (callback) => {
  console.log('Starting HoF');

  callback()

  console.log('Finished HoF');
}

higherOrderFunction(myFunction)