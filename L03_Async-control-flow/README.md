# Asynchronous Control Flow

## Recap

- Callbacks
- Higher order functions

## Topics to cover

- Asynchronous control flow
- `setTimeout` and `setInterval` functions
- Filesystem functions and their async nature
- Events and event handling

## Extra content

- [How the event loop works (22min conference)](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- [Hashing vs Encryption vs Encoding vs Obfuscation (5 minute read)](https://danielmiessler.com/study/encoding-encryption-hashing-obfuscation/)

### 0. Callbacks and Higher order functions (recap)
---

**Callbacks** are functions that are passed as an argument of another function.

**Higher order functions** (HoF) are functions that receive a callback, or a function as an argument. 

```javascript
const myFunction = () => {
  console.log('✅ Hello');
}


// When defining a higher order function, we assume that one or more of the arguments will be a function, in order to call them inside of the HoF
const higherOrderFunction = (callback) => {
  console.log('Starting HoF');

  callback()

  console.log('Finished HoF');
}

higherOrderFunction(myFunction)
```

### 1. Asynchronous vs Synchronous
---

When we talk about something **Synchronous**, it means that is coordinated in time, and has to happen in the exact moment. Like going to the movies to watch a film at a specific time, or attending a lecture.

**Asynchronous** activities are those that don't have to happen at a specific moment, they can happen at any time. Like watching a movie in Netflix or watching a recorded lecture. You can watch it a your own time, pause it and resume it whenever you want.

#### Non-blocking vs Blocking code

In JavaScript, **synchronous** code is code that is executed like a waterfall. Each line is read and executed in order, and the next line has to wait for the previous line to finish executing, sequentially. We can also call this **blocking** code.

**Asynchronous** code is handled in the background and is often attached to callbacks. All asynchronous code is executed once that all of the synchronous code has finished executing. We can also call this **non-blocking** code, because it doesn't stop the rest of the code from executing.

Most of asynchronous functions in JavaScript are functions that handle slow operations or operations that could take from one second to minutes or more, or that don't event get to finish.

To have a better grasp of how JavaScript's engine handles sync and async code, i highly recommend watching [this 22min conference](https://www.youtube.com/watch?v=8aGhZQkoFbQ).


### 2. Async example: setTimeout and setInterval
---

These functions are provided by the browser's web API. `setTimeout` allows you to wait for an amout of miliseconds untill executing a block of code.

`setInterval` will execute a block of code every defined amount of miliseconds.

In the following example you can observe how synchronous code always runs first, and then all of the asynchronous code runs. Every time that the `setTimeout` timers expire, they execute their respective callbacks from within.

```javascript
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

```

Take note: most of async functions allow you to pass a callback as an argument to decide what to do once the async operation has finished.

### 3. Async example: Filesystem functions
---

Node.js provides a module called [fs](https://nodejs.org/api/fs.html) (short for *filesystem*). This module allows us to handle files in our computer. We can do tasks such as obtaining the content of a file, or writing our own files:

```javascript
// 3-file-system.js 

const fs = require('fs')

console.log('Sinchronous code starts here...')

fs.readFile('./message.txt', { encoding: 'utf-8' }, (error, data) => {
  console.log('finished reading file! 📗')
  console.log(data);
})

fs.writeFile('./myfile.txt', file, () => {
  console.log('Finished writing the file!')
})

console.log('Sinchronous code ends here')
```

### 4. Async example: Events and Event handling
---

Each time a user interacts with a website or application, **events** are fired. For instance, when we click on a button we are detonating the *click* event, which can be attached to a function.

To handle events through javascript we can use [event listeners](https://www.w3schools.com/js/js_htmldom_eventlistener.asp#:~:text=The%20addEventListener()%20method%20allows%20you%20to%20add%20event%20listeners,events%2C%20like%20the%20xmlHttpRequest%20object.). These event listeners are always checking for an specific event to occur. Whenever an event is detected, a callback is executed. Inside of this callback we can perform any action we want, like transform an image, change a text o add an animation to our application.

For example let's take a look at the following html:

```javascript
// 4-index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Handling Events</title>
</head>
<body>
  <h1>Events and handling events</h1>
  <p id="myParagraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam rem rerum id, ipsa repellat pariatur quod odit nisi deserunt eaque est! Fuga animi, esse totam at laborum expedita cupiditate odio.</p>
  
  <button id="myButton">Click me!</button>

  <script src="4-events.js"></script>
</body>
</html>
```

This html file is linked to a javascript file. Inside the js file we can attach events to any element, like a button, and perform changes to the website based on the event being listened:

```javascript
// 4-events.js

const button = document.getElementById('myButton');
const paragraph = document.getElementById('myParagraph')

button.addEventListener('click', (e) => {
  // event listeners ALWAYS receive an 'e' or 'event' object.
  // we can get a lot of information about the detonated event by exploring 'e'
  console.log(e.target.value);
  console.log('The button was clicked! ✅')

  paragraph.innerHTML = "The button was clicked!!!!"
})



console.log(button);
```

