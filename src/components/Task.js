import { FaTimes } from "react-icons/fa"

const Task = ({ task, ondelete, onToggle }) => {
  return (
    <div className={`${task.reminder ? "reminder" : ""}`} onDoubleClick={() => onToggle(task.id)} >
      <h3 style={{ display: "flex", justifyContent: "space-between" }} >{task.text}<FaTimes onClick={() => ondelete(task.id)} /></h3>
      <p>{task.day}</p>

    </div >

  )
}

export default Task