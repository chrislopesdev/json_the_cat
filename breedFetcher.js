// require request node
const request = require('request');

// define function w two parameters breed, and anonymous callback (see index.js)
const fetchBreedDescription = (breed, callback) => {
  // breed gets passed into api url
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  // make data request from api
  request(url, (error, response, body) => {

    // if error, call callback (index.js)
    if (error) {
      callback(error, null);
      // exit the function if there's an error
      return;
    }

    // console.log(typeof body); //=> string
    // convert string to object we can use
    const data = JSON.parse(body);

    // console.log(data);
    // console.log(typeof data); //=> object
  
    // if data is empty => log breed not found
    if (data.length === 0) {
      // console.log(`Breed Not Found`);
      // no more log => use call back to log error
      callback('Breed not found!');
    // else give breed description
    } else {
      // console.log(data[0].description);
      // no more log => use callback
      // use null to omit error parameter and log description
      callback(null, data[0].description);
    }
  
  });
};

module.exports = { fetchBreedDescription };