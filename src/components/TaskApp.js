import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

function TaskApp() {

     const [tasks, setTasks] = useState([]);

     const addTask = (task) => {
          if (task.text.trim()) {
               task.text = task.text.trim();
               const updatedTasks = [task, ...tasks];
               setTasks(updatedTasks);
          }
     }

     const removeTask = (id) => {
          const updatedTasks = tasks.filter(tarea => tarea.id !== id);
          setTasks(updatedTasks);
     }

     const completeTask = (id) => {
          const updatedTasks = tasks.map(task => {
               if (task.id === id) {
                    task.done = !task.done;
               }
               return task;
          });
          setTasks(updatedTasks);
     }

     return(
          <div className="container w-full mx-auto my-10 lg:w-3/6 md:w-4/6 lg:p-5 md:p-4 sm:p-3 p-4">
               <TaskForm onSubmit={ addTask } />
               <div className="my-8">
                    {
                         tasks.map( (task) => 
                              <Task
                                   key={ task.id }
                                   id={ task.id }
                                   text={ task.text }
                                   done={ task.done }
                                   remove={ removeTask }
                                   complete={ completeTask } />
                         )
                    }
               </div>
          </div>
     );
}

export default TaskApp;