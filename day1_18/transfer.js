const fs = require('fs');
FilePath = "./file2.txt";
const read = fs.readFileSync(FilePath, "utf-8");

fs.writeFileSync("./new.txt", read);

