const express = require('express')
const app = express();
app.use((req, res, next) => {
    console.log("Middleware 1 Executed");
    next();
    
})
app.use((req, res, next) => {
    console.log("Middleware 2 Executed");
    next();
    
})

app.use('/student/:id', (req, res, next) => {
    console.log("Response Type", req.method)
    next();
})
// Router Level Middle ware- helper blocks of code bound directly to an instance of express.Router(). They run before the request hits your final destination (the route handler)


app.get('/student', (req, res) => {
    console.log("Router Middleware")
    res.send("You are at home page")
})

// Multiple Router Handler- nstead of passing just one function to a route, Express allows you to pass a chain of multiple functions (handlers). They execute one after another in a specific order. Each function must either send a response back to the client or call next() to pass control to the next handler

app.use('/user/:id', (req, res, next) => {
    console.log("Requested URL", req.url)
    next();
},
    (req, res, next) => {
        console.log("Requested Type", req.method)
        next();
    })


app.listen(5050, () => {
    console.log("Server is listening at port 5050")
})