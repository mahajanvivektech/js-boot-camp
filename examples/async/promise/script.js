const fs = require("fs");
const request = require("axios");

fs.readFile("./dog.txt", (err, data) => {
    console.log(`Bread: ${data}`);
    request
        .get(`https://dog.ceo/api/breed/${data}/images/random`)
        .then(res => {
            fs.writeFile("dog-img.txt", res.data.message, error => {
                    if (err) return console.log(err.message);
                    console.log("Random dog image saved")
                }
            )
        })
        .catch(err => console.log(err.message))
});