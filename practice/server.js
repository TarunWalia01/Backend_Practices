const express = require('express')
const app = express();
const PORT = process.env.PORT || 8000

app.use(express.json());

let names =[
    {
        id: 1,
        name: "Tarun",
        vote:36
    },
    {
        id: 2,
        name: "Anant",
        vote:48
    },
    {
        id: 3,
        name: "Swati",
        vote:50
    }
]

app.get('/names', (req, res) => {
    
    res.status(200).json({
        message: "All names retrieved successfull.",
        data: names
        
    });
})

app.post('/vote', (req, res) => {
    const id = parseInt(req.body.id)
    if (!id) {
        return res.status(400).json({
            message: "CandidateId is required."
        })
    }
    const candidate = candidates.find(can => can.id === Number(id))
    if (!candidate) {
        return res.status(404).json({
            message:"Candidate not found."
        })
    }
    candidate.vote++;
    return res.status(200).json({
        message:"Vote cast successfully"
    })
    
    
})
app.get('/result', (req, res) => {
    const total = candidates.reduce((acc, curr) => {
        return acc + curr.vote;
    }, 0);
    res.status(200).json({
        message: "Voting Result",
        totalVotes: total
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})