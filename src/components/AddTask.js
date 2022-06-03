import { useState } from "react"

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onsubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('please add a task')
      return
    }

    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <div>
      <form action="" onSubmit={onsubmit}>
        <div>
          <label>Task</label>
          <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div>
          <label>Day & Time</label>
          <input type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)} />
        </div>
        <div>
          <label id="setReminder">Set Reminder</label>
          <input type="checkbox" htmlFor="setReminder" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
        </div>

        <input type="submit" />
      </form>
    </div>
  )
}

export default AddTask