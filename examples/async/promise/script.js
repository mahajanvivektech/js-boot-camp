const file = require("./file");
const request = require("axios");

file.readFile("dog.txt")
    .then(dogName =>
        request
            .get(`https://dog.ceo/api/breed/${dogName}/images/random`)
            .then(response => file.writeFile("dog-img.txt", response.data.message))
            .then(result => console.log(result)))
    .catch(err => console.log(err.message));