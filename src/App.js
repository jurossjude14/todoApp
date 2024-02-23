import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";


function App() {
  const [showTask, setshowTasks] = useState(true);
  const [tasks, setTasks] = useState([
      {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "reminder": true,
        "primary": false,
      },
      {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "reminder": false,
        "primary": false,
      },
      {
        "id": 3,
        "text": "Playing with my friends",
        "day": "Mar 20th at 1:30pm",
        "reminder": false,
        "primary": false,
      },
]
);

// AddTask
const addTasks = (task) => {
  const id = Math.floor(Math.random() * 100) + 1;
  const newTask = {id, ...task}
  setTasks([...tasks, newTask]);
  
}

// Delete Task Func
const deleteTask = (id) => {
  //console.log('Delete Func', id);
  setTasks(tasks.filter((task) => task.id !== id));
}

const toggleReminder = (id) => {
 setTasks(tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder, primary:!task.primary }: task));
}

  return (
    <div className='container'>
      <Header title='juross' onAdd={()=>setshowTasks(!showTask)} showAdd={showTask} />
      {showTask && <AddTasks addTasks={addTasks}/>}
      {tasks.length > 0 ?
       <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> :
        <h3>No Found Tasks</h3>
      }
      
    </div>
  );
}

export default App;
