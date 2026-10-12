import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const[title, setTitle]=useState("")
  const [task, setTask] = useState([])
  
  const API = "http://localhost:3000/api/tasks"
  
  // create a function to get task

  async function getTask() {
  try {
    const response = await fetch(API);
    const result = await response.json();
    
    // Check if result.data exists, then store that array into your state
    if (result && result.data) {
      setTask(result.data); 
    }
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
}

  // display tasks on page load
  useEffect(() => {
    getTask();
  }, [])
  
  //functionn to post data 1. API call, 2. called json taks(Content header), 3. data to be sent.
  async function addTask(e) {
    e.preventDefault();
    if (!title.trim()) {
      alert("Title missing")
      return;
    }
    const response = await fetch(API, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ title: title })
    })

    if (!response.ok) {
      alert("Failed to create task")
      return 
    }
    //call setTitle & getTask
    setTitle("");
    getTask()
  }
  

  // function to delete task
  async function deleteTask(id) {
    if (!id) {
      return alert("ID Missing")
    }

    const response = await fetch(`${API}/${id}`,  {
      method: "DELETE",
    })
    if (!response.ok) {
      alert("Provide a valid ID");
      return;
    }
    getTask();
  }

  return (
    <>
      <h2>Task Manager</h2>
      {/* Input Form */}
      <form onSubmit={addTask} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Enter task title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          style={{ flex: 1, padding: '8px' }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>Add Task</button>
      </form>

      {/* Task List */}
      <ul>
        {task.length === 0 ? (<li>No tasks available.</li>) :
          (
            task.map((item) => (
            <li key={item.id}>
              <span>{item.title}</span>
              <button 
                onClick={() => deleteTask(item.id)} 
              >
                Delete
              </button>
            </li>
          ))
          )
        }
      </ul>

    </>
  )
}

export default App
