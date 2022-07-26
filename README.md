# TDD with Mocha & Chai

## Topics to cover

- Practice unit testing via the Test Driven Development (TDD) methodology
  - Using the Mocha BDD test framework
  - Using the Chai assertion library
  - Creating and consuming modules using Node's default CommonJS syntax ( module.exports and require)

### 1. Testing in Software
---

#### 1.1 What is testing?

It's about evaluationg and verifying that a software product or application does what it is supposed to do.

#### 1.2 Why should i test my programs?

Without tests, we can't be sure that our code will work as expected every time we do refactors. This can jeopardize our applications or programs when releasing new versions, as each change can be a potential disaster. 

Also, by working in tests we will reduce time spent debugging our application.

#### 1.3 Manual vs Automated

We can do **manual tests**, by veryfing everything by hand and running files as we consider, or **automated tests** which is code that can be run to verify other code.

There are many different automated tests that we can implement, but for today we will only focus on **Unit Tests**, which only test specific functions within our code.

### 2. Writing Unit Tests with Node.js
---

#### 2.1 JavaScript Modules

Before we can talk about tests, we have to discuss how Node.js allows us to work with **modules**.

In order to use modules, first we have to use `module.exports` within the file that we want to export. As you can see in the following example:


```javascript
// math.js

const math = {
  sum: (array) => {
    let sum = 0;
    for (const numb of array) {
      sum += num;
    }

    return sum;
  },
}

module.exports = math;
```

Now that we are using `module.exports = math` we can retrieve what we are exporting in any other file within our project.

To use this code, we have to use `require()`, as you can see in the following example: 

```javascript
// index.js

const math = require('./math.js')

console.log(math); // { sum: function }
```

By using `require('./math.js')` in another file, we can obtain whatever that file is exporting through the `module.exports`.

#### 2.2 assert

Node.js has its own assertion library. We can use it to test the `sum` method in our `math.js` library.

```javascript
// test_sum.js

const assert = require('assert');
const math = require('../math');

assert.equal(math.sum([1,2,3]), 10);

assert.equal(math.sum([0,0,1]), 10);

```

Although we can write tests by only using `assert`, if any of these tests fail, then our whole program will stop at that point, making the testing process much slower.

In order to work more efficiently, we can use a `test runner` such as `Mocha.js` 

### 3. Writing tests with Node.js and Mocha
---

#### 3.1 `npm init` and `package.json`

Before we install mocha in our node.js project, we first have to initialize our project using the following npm comand in terminal:

```
$ npm init
```

Using `npm init` generates a `package.json` file, like the one below:

```javascript
// package.json

{
  "name": "tdd-lecture",
  "version": "1.0.0",
  "description": "",
  "main": "math.js",
  "scripts": {
    "test": ""
  },
  "author": "",
  "license": "ISC",
}
```

Now, once that we have our `package.json` file, we can start installing dependencies/packages/modules. Each new install will be listed inside of our `package.json` and also will be added in the `/node_modules` directory.

Having a correct `package.json` with the dependencies needed to run the project is a must have to share this project with other peers, or even to deploy our apps moving forward.

#### 3.2 Installing Mocha

To install and understand how to use `Mocha`, we can read the official docs: https://mochajs.org/

Essentialy we must install it using

```
$ npm install mocha --save-dev
```

By using the `--save-dev` flag, we can add this as a `devDependency`. This means that this dependency is only going to be used when developing the application, and it is not necesary in a production environment.

Then we must change the scripts field in our `package.json` so we can use the `test` script to run our tests with Mocha.

```javascript
// package.json

{
  "name": "tdd-lecture",
  "version": "1.0.0",
  "description": "",
  "main": "math.js",
  "scripts": {
    // Add this script to run mocha with npm
    "test": "mocha"
  },
  "author": "",
  "license": "ISC",
  // mocha should already be listed in devDependencies
  "devDependencies": {
    "mocha": "^10.0.0"
  }
}
```

Then, we must **create a new folder inside our project** called /tests. Inside this directory we will place every test file we generate. 

Now you can run Mocha from the terminal like this:

```
// This will search and execute any test inside /tests
$ npm run test

// This will only execute one specific file
$ npm run test ./tests/test_sum.js
```

#### 3.3 Adapt tests to Mocha syntax

In order to be able to use Mocha's tools, we have to use the provided syntax.

We adjust `/tests/test_sum.js` like this:

```javascript
// /tests/sum_test.js

const assert = require('assert');
const math = require('../math');

describe('Testing the sum method from Math.js', () => {

  it('should add [1,2,3] and return a 6', () => {
    assert.equal(math.sum([1,2,3]), 6);
  });

  it('should add [0,0,1] and return a 1', () => {
    assert.equal(math.sum([0,0,1]), 1);
  })
})

```

This way, when using `npm run test`, we will see a much better output of the result of each test directly in our terminal, and if any of the tests fail, it wont stop the execution of the rest of the tests.


### 4. Writing tests with Node.js, Mocha and Chai
---

#### 4.1 BDD Syntax vs Assert

We can absolutely keep developing tests by just using Node's built in `assert` library, combined with `Mocha` as a test runner.

But we also have the possibility to use another `assertion` library.

`Chai.js` is an assertion library that allows you to use either the **BDD Syntax** or the classic **Assert syntax**.

#### 4.2 Installing Chai

You can read and follow the official docs here: https://www.chaijs.com/ 

Essentialy we must install it using

```
$ npm install chai --save-dev
```

Once `Chai.js` is installed, we can verify it was succesful by looking at the `devDependencies` in our `package.json`

```javascript
// package.json

{
  "name": "tdd-lecture",
  "version": "1.0.0",
  "description": "",
  "main": "math.js",
  "scripts": {
    "test": "mocha"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    // chai should appear listed here
    "chai": "^4.3.6",
    "mocha": "^10.0.0"
  }
}
```


#### 4.3 Using Chai's BDD Syntax

You can always rely on the following cheat sheet:
https://devhints.io/chai

By using the BDD Syntax, we can describe *behavior* within our lines of code, instead of having to translate what each assert is doing.

In class we implement this syntax by testing the following `isOdd` method:

```javascript
// math.js

const math = {
  sum: function (numbersArray) {
    let sum = 0;

    for (const num of numbersArray) {
      // sum = sum + num;
      sum += num;
    }

    return sum;
  },
  isOdd: function(number) {
    if (number % 2 === 1) {
      return true
    } else {
      return false;
    }
  },
}

module.exports = math
```

Then we can write tests about isOdd usind the BDD syntax:

```javascript
// /tests/test_odd.js

const { expect } = require('chai');
const math = require('../math');

describe('Testing the isOdd method', () => {
  
  it('should return false when providing the number 2', () => {
    expect(math.isOdd(2)).to.be.false;
  })

  it('should return true when providing the number 3', () => {
    expect(math.isOdd(3)).to.be.true;
  })

})
```

As you can see, instead of using `assert`, we are using `expect`, which comes from the `chai.js` assertion library.

### 5 Test Driven Development (TDD)
---

#### 5.1 What is TDD?

To finish we have to discuss Test Driven Development (TDD).

Instead of writing our code and then writing the tests, we can think in a really simplified and straightforward way that **TDD is about writing tests first, coding second**.

But this is not only about tests, this means that we have to carefully think and design a solution which will be tested by each test we write.

#### 5.2 Why use TDD?

By writing the tests first, we can reduce a lot of debugging and refactoring time because we will know what our code has to accomplish. 

#### 5.3 TDD example

First, we have to create our tests file, and include each scenario that will be tested. For this example, we will implement a new method inside `math.js` which we will call `abs`, as in "absolute", to get the absolute value of a number.

```javascript
// /tests/test_abs.js

const { expect } = require('chai');
const math = require('../math');

describe('Testing the abs method', () => {
  
  it('should be a function', () => {
    expect(math.abs).to.be.a('function')
  })

  it('should return 5 when providing -5', () => {
    expect(math.abs(-5)).to.equal(5)
  })

  it('should return 35 when providing 35', () => {
    expect(math.abs(35)).to.equal(35)
  })

  it('should return null when providing nothing', () => {
    expect(math.abs()).to.be.null;
  })

})

```

Second, we create the `abs` method inside `math.js` and leave it as an empty function:

```javascript
const math = {
  // other methods here...
  abs: function(number) {

  },
}

module.exports = math
```

Now we can do `npm run test ./tests/test_abs.js` to see how these tests fail.

Then, we proceed to write the logic inside the `abs` function untill each tests passes, becoming greeen:

```javascript
const math = {
  // other methods here...
  abs: function(number) {
    if(number < 0) {
      return -number;
    }

    if(number >= 0) {
      return number;
    }

    return null;
  },
}

module.exports = math
```

This way, tests are the ones dictating how each function should behave. Instead of writing tests after we already defined how the logic of the function has to be.