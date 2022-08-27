# Web Servers 101

## Topics to cover

1. Intro to Web Servers (http node.js module)
2. Intro to Express
3. What is a "middleware?"
4. Intro to Server-side view templates with EJS

### Extra content

- [MDN Web Docs: What is a web server? (12min read)](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server)

- [Using Template Engines with Express (express.js docs)](https://expressjs.com/en/guide/using-template-engines.html)

---

_**IMPORTANT NOTE**: In the video lecture i mention that web servers are different than api servers. **This is wrong**._

_API Servers ARE one type of Web Servers._

_Web Servers can of be many types, not only API Servers. Database Servers, Media Servers and more can be Web Servers if they use HTTP to communicate._


### 1. Web Servers
--- 

From MDN Web Docs:

The term web server can refer to hardware or software, or both of them working together.

1. On the **hardware side**, a web server is a **computer that stores web server software and a website's component files** (for example, HTML documents, images, CSS stylesheets, and JavaScript files)...

2. On the **software side**, a web server includes several parts that **control how web users access hosted files**. At a minimum, this is an **HTTP server**. An HTTP server is software that understands URLs (web addresses) and HTTP (the protocol your browser uses to view webpages)...

Focusing on the **software side**, we can create our own http servers, or servers that use http's request and response cycle, by using `node.js`

Within `node.js` we find the [`http` module](https://nodejs.org/api/http.html), which we can use in the following way:


```js
// a basic web server built using Node's http module
const http = require("http");
const port = 3000;

// create the server
const server = http.createServer((request, response) => {
  response.end("hello world");
});

// start the server listening on the specified port
server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
```

Instead of responding the same way to every request that comes in, we can program the web server to respond differently depending on the specifics of the request by using an event listener: `server.on('request')`

```js
// a basic web server built using Node's http module
const http = require("http");
const port = 3000;

// create the server
const server = http.createServer((request, response) => {
  response.end("hello world");
});

// event listener that handles different kinds of requests
server.on('request', (req, res) => {

  if(req.method === 'GET' && req.url === '/'){
    res.write('Hello July 11 Cohort!')
    res.end()
  }

  if(req.method === 'GET' && req.url === '/about'){
    res.write('You are in the ABOUT PAGE')
    res.end()
  }

  if(req.method === 'POST' && req.url === '/about'){
    res.write('You are in the POST ABOUT PAGE')
    res.end()
  }


})

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
```

And there are many different ways to implement this same type of behavior:

```js
// add custom routes to the `createServer` function
const server = http.createServer((req, res) => {
  const route = `${req.method} ${req.url}`;

  switch (route) {
    case "GET /":
      res.end('This is a GET request to "/"');
      break;
    case "GET /users":
      res.end('This is a GET request to "/users"');
      break;
    default:
      res.end("Route not found");
  }
});
```

### 2. Express.js

---

[Express.js](https://expressjs.com/) is a _framework_ used to build web servers. Express makes handling routes/urls/endpoints much easier.

```js
// basic Express server
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send('thanks for visiting "/"');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
```

### 3. Middlewares
---

Middlewares in web servers are code, in the form of functions, that runs between the incoming request and the outgoing response.

We can create our own middlewares in `express.js` and use them in the following fashion:

```js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send('thanks for visiting "/"');
});

/* By using app.use() we can configure 
  middlewares to run before each
  route/url/endpoint in our web server

  Here, the middleware is a callback defined by us,
  that handles three arguments:
    1) request
    2) response
    3) next, which indicates that the middleware has finished
*/
app.use((req, res, next) => {
  console.log('New request!!', req.method, req.url)
  next()
  /* we have to execute next() to avoid
    infinite loop and move the request forward.
  */
})

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

```

There are also many popular middleware packages available to us via NPM (or Yarn), for example:
  - [`body-parser`](https://expressjs.com/en/resources/middleware/body-parser.html): Parses the _body_ of the incoming request, converting it to a JS object and attaching it to the `request` object (accessible with `req.body`)
  - [`cookie-parser`](https://expressjs.com/en/resources/middleware/cookie-parser.html): Parses the _cookie_ header, converting it to an object and attaching it to the `request` object (accessible with `req.cookies`)
  - [`morgan`](https://expressjs.com/en/resources/middleware/morgan.html): A _logger_ that logs all requests/responses to the web servers console


```js
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");

/* this is how you configure external
  middlewares like morgan or bodyparser
*/
app.use(bodyParser.urlEncoded({ extended: false }));
app.use(morgan("dev"));
```

### 4. Template Engines and EJS
---

From [the Express Docs](https://expressjs.com/en/guide/using-template-engines.html):
  > A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client.


We will use [Embedded JavaScript templating (EJS)](https://ejs.co/) as a template engine. In order to use it in `express.js`, first we have to install it using npm:

```
$ npm install ejs
```

Then we tell `express.js` which _template engine_ to use by using the `app.set()` method:

```js

// Note: Express refers to the _template engine_ as a _view engine_
app.set("view engine", "ejs");
```

By default, Express will look inside a `views` directory for our templates. We specify which template to render using the `res.render()` method on the `response` object like this:

```js
const express = require('express');
const app = express();
const PORT = 5000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
  /* res.render() will look for a file called 'index.ejs'
     inside of the /views directory
  */
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
```

In order to pass data into the `.ejs` file, the convention is to pass the needed variables into a `templateVars` object. Then pass that object into the `res.render()` method:

```js
const templateVars = {
  message: "this is data to be passed into the .ejs template",
  date: "16-08-2022",
};

response.render("index", templateVars);
```

Finally, inside our `index.ejs` we can have plain and normal html code, but add the following syntax from `.ejs`

```ejs
<h2><%= message %><h1>
<h3><%= date %><h1>
```

In this way, our `.ejs` within the `/views` directory should look like this:

```ejs
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Welcome to index.ejs! 🎈</h1>
  <h2>Message: <%= message %> </h2>
  <h3>Date: <%= date %> </h2>
  
</body>
</html>
```
