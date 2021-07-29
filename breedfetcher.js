const request = require('request');

const breedName = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (!error && body === "[]") {
    console.log('sorry bro, your breed name was not found.');
  } else if (!error) {
    const data = JSON.parse(body);
    console.log(data);
  } else {
    console.log(error);
  }
});