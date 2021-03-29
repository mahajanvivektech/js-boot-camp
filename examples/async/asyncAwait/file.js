const fs = require("fs");

module.exports.readFile = file => {
    return new Promise((resolve, reject) =>
        fs.readFile(file, (err, data) => {
            if (err) reject("Read operation failed: File not found...")
            resolve(data);
        }));
};

module.exports.writeFile = (file, data) => {
    return new Promise((resolve, reject) =>
        fs.writeFile(file, data, err => {
            if (err) reject("Write operation failed: File not found...")
            resolve(`Dog image written into ${file}`);
        }));
};


