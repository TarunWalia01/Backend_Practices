const http = require("http")
const PORT = 4000;
const server = http.createServer((req, res) => {
    let user = {};
    if (req.url === "/" && req.method==="POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        })

        req.on("end", () => {
            console.log("Raw Data", body);
            user=JSON.parse(body);
            console.log("Parsed Data", user);
        })
        res.end(JSON.stringify({
            message: "User Created Successfullt",
            user:user
        }))

    } else {
        res.end("Not Found")
    }

});
server.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})