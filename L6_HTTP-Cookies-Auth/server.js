const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const uuid = require('uuid/v4');
const PORT = process.env.PORT || 3001;

// creating an Express app
const app = express();

// morgan middleware allows to log the request in the terminal
app.use(morgan('short'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// req.body 

// req.cookies
app.use(cookieParser())

// Static assets (images, css files) are being served from the public folder
app.use(express.static('public'));

// Setting ejs as the template engine
app.set('view engine', 'ejs');

// In memory database
const movieQuotesDb = {
  d9424e04: {
    id: 'd9424e04',
    quote: 'Why so serious?',
  },
  '27b03e95': {
    id: '27b03e95',
    quote: 'YOU SHALL NOT PASS!',
  },
  '5b2cdbcb': {
    id: '5b2cdbcb',
    quote: "It's called a hustle, sweetheart.",
  },
  '917d445c': {
    id: '917d445c',
    quote: 'The greatest teacher, failure is.',
  },
  '4ad11feb': {
    id: '4ad11feb',
    quote: 'Speak Friend and Enter',
  },
};

const quoteComments = {
  '70fcf8bd': {
    id: '70fcf8bd',
    comment: 'So awesome comment!',
    quoteId: 'd9424e04',
  },
};

// Users database
const usersDb = {
  eb849b1f: {
    id: 'eb849b1f',
    name: 'Mauricio Saavedra',
    email: 'maui@gmail.com',
    password: 'house',
  },
  '1dc937ec': {
    id: '1dc937ec',
    name: 'Phil A. Mignon',
    email: 'good.philamignon@steak.com',
    password: 'meatlover',
  },
};

const createNewQuote = (content) => {
  const quoteId = uuid().substr(0, 8);

  // {
  //   id: 'd9424e04',
  //   quote: 'Why so serious?',
  // }

  // creating the new quote object
  const newQuote = {
    id: quoteId,
    quote: content,
  };

  // Add the newQuote object to movieQuotesDb

  movieQuotesDb[quoteId] = newQuote;

  return quoteId;
};

const updateQuote = (quoteId, content) => {
  // d9424e04: {
  //   id: 'd9424e04',
  //   quote: 'Why so serious?',
  // }

  // updating the quote key in the quote object
  movieQuotesDb[quoteId].quote = content;

  return true;
};

const addNewUser = (name, email, password) => {
  // Create a user id ... generate a unique id
  const userId = Math.random().toString(36).substring(2, 8);

  // Create a new user object

  const newUser = {
    id: userId,
    name,
    email,
    password,
  };

  // Add the user to the database

  // Read the value associated with the key
  // nameOfTheobject[key]

  // how you add a value to an object
  // nameOfTheobject[key] = value

  users[userId] = newUser;

  return userId;
};


const getUserByEmail = (email) => {
  for (const key in usersDb) {
    if (Object.hasOwnProperty.call(usersDb, key)) {
      const dbUser = usersDb[key];
      if (dbUser.email === email) {
        console.log('user email ...', dbUser.email);
        return dbUser;
      }
    }
  }
  return false;
}
/*
  AUTH ENDPOINTS
*/

app.get('/register', (req, res) => {
  const templateVars = { user: null }
  res.render('register', templateVars)
})

app.post('/register', (req, res) => {
  // 0) VALIDATION

  // 1) Read the name, email and password
  const { name, email, password } = req.body;

  // 2) Check if the email is not already taken
  const userExists = getUserByEmail(email);
  if (userExists) return res.status(403).send('Email is already taken')

  // 3) Add name, email, password to usersDB (add new user)

  /*
    eb849b1f: {
      id: 'eb849b1f',
      name: 'Mauricio Saavedra',
      email: 'maui@gmail.com',
      password: 'house',
    }
  */
    const idUser = uuid().substr(0, 8);

    const newUser = {
      id: idUser,
      name,
      email,
      password,
    }

      /*
        eb849b1f: {
          id: 'eb849b1f',
          name: 'Mauricio Saavedra',
          email: 'maui@gmail.com',
          password: 'house',
        }
      */

    usersDb[idUser] = newUser;

  // 4) Respond back to the client with a COOKIE
  res.cookie('user_id', idUser)

  res.redirect('/quotes')
})

app.get('/login', (req, res) => {
  const templateVars = { user: null }
  res.render('login', templateVars)
})

app.post('/login', (req, res) => {
  // 1) retrieve input email and password
  const { email, password } = req.body

  // 2) check if email exists in db
  const dbUser = getUserByEmail(email);
  if (!dbUser) return res.status(404).send('The email provided does not exist')

  // 3) validate passwords match
  if (dbUser.password === password) {
     // 4) Respond back to the client with a COOKIE
    res.cookie('user_id', dbUser.id)

    res.redirect('/quotes')
  } else {
    return res.status(404).send('The password provided is not correct')
  }

})

app.get('/users.json', (req, res) => {
  res.json(usersDb)
})

app.post('/logout', (req, res) => {
  res.clearCookie('user_id');
  res.redirect('/quotes')
})
































/*
  QUOTE ENDPOINTS
*/
app.get('/quotes', (req, res) => {
  const quoteList = Object.values(movieQuotesDb);
  const idUser = req.cookies['user_id'];
  if (!idUser) return res.render('quotes', { quotesArr: quoteList, user: null });

  const currentUser = usersDb[idUser.toString()];
  if (!currentUser) return res.send('User not found :(')

  if (!currentUser.name) {
    const userObject = currentUser[idUser];
    const templateVars = { quotesArr: quoteList, user: userObject };
    return res.render('quotes', templateVars);
  }

  const templateVars = { quotesArr: quoteList, user: currentUser };
  return res.render('quotes', templateVars);
});

app.get('/quotes/new', (req, res) => {
  res.render('new_quote');
});

// Add a new quote
// CREATE
// POST /quotes

app.post('/quotes', (req, res) => {
  // extract the quote content from the form.
  // content of the form is contained in an object call req.body
  // req.body is given by the bodyParser middleware
  const quoteStr = req.body.quoteContent;

  // Add a new quote in movieQuotesDb

  createNewQuote(quoteStr);

  // redirect to '/quotes'
  res.redirect('/quotes');
});

// Edit a quote

// Display the form
// GET /quotes/:id
app.get('/quotes/:id', (req, res) => {
  const quoteId = req.params.id;
  const templateVars = { quoteObj: movieQuotesDb[quoteId] };

  // render the show page
  res.render('quote_show', templateVars);
});

// Update the quote in the movieQuotesDb
// PUT /quotes/:id

app.post('/quotes/:id', (req, res) => {
  // Extract the  id from the url
  const quoteId = req.params.id;

  // Extract the content from the form
  const quoteStr = req.body.quoteContent;

  // Update the quote in movieQuotesDb

  updateQuote(quoteId, quoteStr);

  // redirect to '/quotes'
  res.redirect('/quotes');
});

// DELETE
app.post('/quotes/:id/delete', (req, res) => {
  const quoteId = req.params.id;

  delete movieQuotesDb[quoteId];

  res.redirect('/quotes');
});

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
