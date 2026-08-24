const fs = require('fs');
const readStream = fs.createReadStream('./file2.txt')
const writeStream = fs.createWriteStream('./new2.txt')
// readStream.on('data', (chunk) => {
//     console.log(chunk.toString());
//     writeStream.write(chunk);
// })
readStream.on('end', () => {
    console.log("I am out of file");
    writeStream.end();
})

readStream.pipe(writeStream); // pipe is a method which will read the data from the readStream and write it to the writeStream

writeStream.on('finish', () => {
    console.log("I am out of file");
})
