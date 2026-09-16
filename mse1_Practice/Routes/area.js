const express = require('express');
const app = express();

const router = express.Router();
app.use(express.json());

const PORT = process.env.PORT || 3050;

router.get('/square/area', (req, res) => {
    const width = parseInt(req.query.width);
    if (width<=0 || !width) {
        res.status(401).json({
            message:"Width is required"
        })
    }
    const area= width*width;
    console.log(area);
    res.send(`Area of Square is ${area}`);
})

router.get('/square/perimeter', (req, res) => {
    const width = parseInt(req.query.width);
    if (width<=0 || !width) {
        res.status(401).json({
            message:"Width is required"
        })
    }
    const perimeter= 4*width;
    console.log(perimeter);
    res.send(`Perimeter of Square is ${perimeter}`);
})


router.get('/rectangle/perimeter', (req, res) => {
    const width = parseInt(req.query.width);
    const length = parseInt(req.query.length);
    if (width<=0 || !width || length<=0 || !length) {
        res.status(401).json({
            message:"Width is required"
        })
    }
    const perimeter= 2*(width+length);
    console.log(perimeter);
    res.send(`Perimeter of Rectangle is ${perimeter}`);
})


router.get('/rectangle/area', (req, res) => {
    const width = parseInt(req.query.width);
    const length = parseInt(req.query.length);
    if (width<=0 || length<=0 || !width || !length) {
        res.status(401).json({
            message:"Width is required"
        })
    }
    const area= width*length;
    console.log(area);
    res.send(`Area of Rectangle is ${area}`);
})

// app.listen(PORT, () => {
//     console.log("Server is running on port 3050")
// })

module.exports = router;