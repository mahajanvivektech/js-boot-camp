const file = require("./file");
const request = require("axios");

const getDogImage = async () => {
    try {
        const dogName = await file.readFile("dog.txt");
        const response = await request.get(`https://dog.ceo/api/breed/${dogName}/images/random`);
        const successMsg = await file.writeFile("dog-img.txt", response.data.message);
        console.log(successMsg);
    } catch (error) {
        throw(error);
    }
    return "RESOLVED";
};

(async () => {
    try {
        const msg = await getDogImage();
        console.log(msg);
    } catch (error) {
        console.log("ERROR");
    }
})();
