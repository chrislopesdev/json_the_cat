const request = require('request');

const breed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  // console.error('error:', error);
  // console.log('statusCode:', response && response.statusCode);
  // console.log('body:', body);
  if (error) {
    console.log("Request not found", error);
  }
  // console.log(typeof body); //=> string
  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data); //=> object

  // if data is empty => log breed not found
  if (data.length === 0) {
    console.log(`Breed Not Found`);
  // else give breed description
  } else {
    console.log(data[0].description);
  }

});