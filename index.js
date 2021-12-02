// require fetchBreedDescription function
const { fetchBreedDescription } = require('./breedFetcher');
// command line input
const breed = process.argv[2];

// call fetchBreedDescription with breed input and 'callback'
fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    // if breed found description is passed here through callback
    console.log(desc);
  }
});