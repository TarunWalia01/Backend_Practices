const express = require('express');
const router = express.Router();

const app = express();

let tasks=[]

router.get('/api/tasks', (req, res) => {
    try {
        return res.status(200).json({data: tasks });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error"});
    }
});

router.post('/api/tasks', (req, res) => {
    try {
        const { title } = req.body;
        //Check if title exists
        if (!title || !title.trim()) {
            return res.status(400).json({ error: "Task title is required" });
        }
        const newTask = {
            id: Date.now().toString(), // Simple unique ID generation
            title: title.trim(),
            completed: false
        };
        tasks.push(newTask);
        return res.status(201).json({ message: "Task created successfully", data: newTask });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error"});
    }
});

router.delete('/api/tasks/:id', (req, res) => {
    try {
        const { id } = req.params;
        const taskIndex = tasks.findIndex(t => t.id === id);
        if (taskIndex === -1) {
            return res.status(404).json({ error: `Task with ID ${id} not found` });
        }
        tasks.splice(taskIndex, 1);
        return res.status(200).json({ message: "Task deleted successfully"});

    } catch (error) {
        return res.status(500).json({ error: "Internal server error"});
    }
})

module.exports = router;