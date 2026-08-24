const http = require('http'); // http is a module which will help us to create a server

//http methods list (GET(read), POST(create,write), PUT(replacement/updation), DELETE, PATCH(replacement/updation), HEAD, OPTIONS, TRACE, CONNECT, PURGE, LINK,)
// http status codes: 1xx informational, 2xx success, 3xx redirection, 4xx client error, 5xx server error

const PORT=4000; // port number on which the server will listen
const server = http.createServer((req, res) => {
    // if (req.url==="/" && req.method==="GET") {
    //     res.end("you are at home page");
    // } else if (req.url==="/Contact" && req.method==="GET") {
    //     res.end("Contact me on Whatsapp")
    // } else {
    //     res.statusCode=404;
    //     res.end("Page not found"); // 404 is the status code for page not found
    // }
    switch (req.url) {
        case "/":
            res.end("you are at home page");
            break;
        case "/Contact":
            res.end("Contact me on Whatsapp");
            break;
        default:
            res.statusCode = 409;
            res.end("Page not found");
            break;
    }
})
server.listen(process.env.PORT || PORT, () => {
    console.log("Server is listening on port 4000");
})
