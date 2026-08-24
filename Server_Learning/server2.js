const http = require("http")
const PORT = 4000;
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        const user = {
            id: 1,
            name: "Tarun Walia",
            sundaram:"yadav"
        }
        res.end(JSON.stringify(user));
    }

});
server.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})