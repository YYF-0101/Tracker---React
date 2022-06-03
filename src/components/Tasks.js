import Task from "./Task"

const Tasks = ({ tasks, ondelete, onToggle }) => {
  return (
    // setTasks([...tasks, {}])
    <>
      {tasks.map((tasks) => (
        <Task key={tasks.id} task={tasks} ondelete={ondelete} onToggle={onToggle} />
      ))}
    </>
  )
}

export default Tasks