const file = require("./file");
const request = require("axios");

const getDogImages = async () => {
    try {
        const dogName = await file.readFile("dog.txt");
        const imagePromise1 = request.get(`https://dog.ceo/api/breed/${dogName}/images/random`);
        const imagePromise2 = request.get(`https://dog.ceo/api/breed/${dogName}/images/random`);
        const imagePromise3 = request.get(`https://dog.ceo/api/breed/${dogName}/images/random`);

        const results = await Promise.all([imagePromise1, imagePromise2, imagePromise3]);
        const images = results.map(result => result.data.message);
        const successMsg = await file.writeFile("dog-img.txt", images.join("\n"));
        console.log(successMsg);
    } catch (error) {
        throw(error);
    }
    return "RESOLVED";
};

(async () => {
    try {
        const msg = await getDogImages();
        console.log(msg);
    } catch (error) {
        console.log("ERROR");
    }
})();
