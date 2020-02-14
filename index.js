const { fetchBreedDescription } = require("./breedFetcher");

const breedName = process.argv[2];

// USAGE
fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log("Error fetching details:\n", error);
  } else if (description.length > 2) {
    //API returns an [] if nothing returns from search query, which is === to a body.length of 2
    // const parsedRes = JSON.parse(description);
    // console.log(parsedRes[0].description);
    console.log(description);
  } else {
    console.error("The breed you request was not found. Please try again.");
  }
});
