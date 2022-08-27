const request = require('request');

/**
 * HTTP GET REQUEST
 * (HTTP VERBS // HTTP METHODS)
 */
// request.get('http://www.google.com', (error, response, body) => {
//   if (error) {
//     return console.log('Error on HTTP GET Request...', error);
//   }
  
//   const { statusCode, body: resBody } = response;

//   console.log('✅', statusCode);

//   if (statusCode === 200) console.log('Item found :D')
//   if (statusCode === 404) console.log('Item not found :(')
// });

/**
 *    HTTP METHODS (GET, POST, PUT/PATCH, DELETE, HEAD)
 *    HTTP STATUS CODES (200, 201, 404, 500...)
 *    HTTP RESPONSE -> HTTP BODY
 */


/***
 * WORKING WITH STATUS CODES
 * 
 * 100 - Protocol Info
 * 200 - Everything's OK
 * 300 - Redirections
 * 400 - Client did something wrong
 * 500 - Server did something wrong
 */

 request.get('https://swapi.dev/api/people/13', (error, response, body) => {
  if (error) {
    return console.log('Error on HTTP GET Request...', error);
  }
  
  const { statusCode } = response;

  console.log('✅', statusCode);
  
  if (statusCode === 404) console.log('Item not found :(')
  if (statusCode === 200) {
    console.log('Item found :D')
    const json = JSON.parse(body)
    console.log(`My character is ${json.name}`)
  }
});

