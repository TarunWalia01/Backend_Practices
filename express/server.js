const express = require('express'); 
const app = express(); // this statement will equivalent to http.createServer()
// Middleware- it is a function that has access to the request object, the response object, and the next function in the chain. 
app.get('/', (req, res) => {
    res.send("Hello Walia");
})
app.listen(4000, () => {
    console.log("Server is listening.");
})