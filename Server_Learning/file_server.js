const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const result = fs.appendFile("./file.txt", "Hello Tarun ", (err) => {
        if (err) throw err;
        console.log(result);
    });
    console.log(req.headers);
})
server.listen(4000, () => {
    console.log("Server is listening on port 4000");
})