import React from 'react'
import { useState } from 'react'

const Todolist = () => {

    const [tasks,setTasks] = useState([])
    const [taskInput , SetTaskInput] = useState("") 
  
    const handleAddTask = ()=> {
      if ( taskInput.trim () !==""){
         setTasks([...tasks, taskInput])
         SetTaskInput("")
       
      }
    }
  
  
    const handleDeleteTask =(index)=>{
          const updateTasks = tasks.filter((_ , i)=> i !== index)
          setTasks(updateTasks)
    }
   const handleUpdateTask =(index)=>{
       const  updatedTask = prompt("Enter NEw task" , tasks[index])
  
       if(updatedTask){
         const updatedTasks = tasks.map((task,i)=>
            i === index ? updatedTask : task
        )
        setTasks(updatedTasks)
       }
    }
  
  
    return (   
       <>
        <div>
           <h1>Crud App in react</h1>
  
           <input type="text" placeholder='enter your task' 
             value={taskInput}
             onChange={(e)=> SetTaskInput(e.target.value) }
           />
           <button onClick={handleAddTask}>Add Task</button>
  
  
           <ul>
              {
                tasks.map((task,index)=>(
                  <>
                   <li key={index}>{task}
                     
                      <button onClick={()=>handleDeleteTask(index)}>Delete</button>
                      <button onClick={()=>handleUpdateTask(index)}>Update</button>
                    
                     </li>
                  </>
                ))
              }
           </ul>
        </div>
     </>
    )
}

export default Todolist
