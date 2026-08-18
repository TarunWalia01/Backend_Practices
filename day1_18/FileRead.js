const fs=require('fs');
FilePath = "./file.txt";
const res = fs.readFileSync(FilePath, "utf-8")
console.log(res);

fs.readFile(FilePath, "utf-16le", (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
})