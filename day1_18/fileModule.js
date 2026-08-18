const fs = require('fs');
// fs.writeFileSync('./file.txt', 'Hello Tarun!');
// const FilePath = "./file.txt";
// const data = "Tarun Walia";
// fs.writeFileSync(FilePath, data); // it will create a file if it doesn't exist
console.log("Meowww ")
fs.writeFile('./file2.txt', 'Demo of write file', (err) =>{ //(err)-> this is a callback function which will be called when the file is written 
    if(err) {
        throw err;
        console.log("I am in file")
    }
    console.log("I am out of file")
});

