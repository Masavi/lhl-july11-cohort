// /**
//  * Asynchronous
//  */

setTimeout(
  () => {
    console.log('Inside setTimeout 1');
  }, 
  3000,
);

setTimeout(() => {
  console.log('Inside setTimeout 2')
}, 1000);

setTimeout(() => {
  console.log('Inside setTimeout 3')
}, 2000);

// /**
//  * Synchronous
//  */

console.log('Starting program...')

const array = [1,2,3];

for (let i = 0; i < 2000; i++) {
  console.log(`Loop #${i}`)
}

console.log('Progam ends 🏁')

/**
 * setInterval
 */

let numberOfLoops = 10;

const myIntervalID = setInterval(() => {
  if (numberOfLoops <= 0) {
    clearInterval(myIntervalID)
  }

  numberOfLoops -= 1;
  console.log('hello from setInterval 🤠', numberOfLoops)
}, 1000);




