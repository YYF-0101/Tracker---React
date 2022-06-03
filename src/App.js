import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  const [showAdd, setShowAdd] = useState('flase')
  const [tasks, setTasks] = useState(
    [
      {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "reminder": true
      },
      {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "reminder": true
      },
      {
        "id": 3,
        "text": "Food Shopping",
        "day": "Feb 5th at 2:30pm",
        "reminder": false
      }
    ]
  )

  const addTask = (task) => {
    console.log(task)
    const id = Math.floor(Math.random() * (100 - 1) + 1)
    console.log(id)
    const newTask = { id, ...task }
    console.log(newTask)
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    console.log("deleted" + id)
    setTasks(tasks.filter((task) =>
      task.id !== id
    ))
  }

  const toggleRemainder = (id) => {
    console.log("toggled" + id)
    setTasks(
      tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task)
    )
  }

  const Home = () => (
    <>
      {showAdd && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? < Tasks tasks={tasks} ondelete={deleteTask} onToggle={toggleRemainder} /> : "No Task"}</>
  )

  return (
    <BrowserRouter>
      <>
        <Header onClick={() => setShowAdd(!showAdd)} showAdd={showAdd} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}



export default App;
