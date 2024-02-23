import { useState } from "react"

const AddTasks = ({addTasks}) => {
  const [text, setText] = useState('');     
  const [day, setDay] = useState(''); 
  const [reminder, setReminder] = useState(false); 
  const [primary, setPrimary] = useState(false);  

  const onSubmitData = (e) => {
    e.preventDefault();
   
    if(!text || !day) {
    alert('Please Add Tasks');
   } 

   addTasks({text, day, reminder, primary});

   setText('');
   setDay('');
   setReminder(false);
   setPrimary(false);

  }

  return (
    <div>
    <form className='add-form' onSubmit={onSubmitData}>
      <div className='form-control'>
        <label>Task</label>
        <input
          value={text || ''}
          type='text'
          placeholder='Add Task'
          onChange={(e)=> setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input
          value={day || ''}
          type='text'
          placeholder='Add Day & Time'
          onChange={(e)=> setDay(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input value={reminder || false } type='checkbox' checked={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)}/>
      </div>
      <div className='form-control form-control-check'>
        <label>Primary</label>
        <input value={primary || false } type='checkbox' checked={primary} onChange={(e)=> setPrimary(e.currentTarget.checked)}/>
      </div>
      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>

    </div>
  )
}

export default AddTasks
