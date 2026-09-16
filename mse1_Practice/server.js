const express = require('express');
const app = express();

const PORT = process.env.PORT || 3050;

const areaRoutes = require('./Routes/area');
app.use(express.json());

app.use('/area', areaRoutes);

app.listen(PORT, () => {
    console.log("Server is running on port 3050")
})

