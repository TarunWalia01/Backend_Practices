const express = require('express')
const cors = require("cors");

const app = express();
const PORT = 3000

app.use(cors());
app.use(express.json())

const taskRouter = require('./Router/taskRoutes')
app.use(taskRouter)

app.listen(PORT, () => {
    console.log("Server is listening..")
})