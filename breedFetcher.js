// 40
const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        callback(error, null);
      } else {
        const description = JSON.parse(body)[0].description.trim();
        callback(null, description);
      }
    }
  );
};

module.exports = { fetchBreedDescription };
