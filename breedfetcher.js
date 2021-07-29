const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (!error && body === "[]") {
      callback(null, 'sorry bro, your breed name was not found.');
    } else if (!error) {
      const data = JSON.parse(body);
      callback(null, data);
    } else {
      callback(error);
    }
  });
};

module.exports = {
  fetchBreedDescription
};
