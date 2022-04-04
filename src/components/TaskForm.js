import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props) {

     const [input, setInput] = useState('');

     const handleInput = (e) => {
          setInput(e.target.value);
     }

     const handleSubmit = (e) => {
          e.preventDefault();

          const task = {
               id: uuidv4(),
               text: input,
               done: false
          }

          props.onSubmit(task);
     }

     return (
     <div>
          <form className="inline-block w-full" onSubmit={ handleSubmit }>
               <input 
                    type="text"
                    className="rounded-md font-bold border-gray-300 border-2 p-2 px-3 outline-none mb-2 w-full focus:border-blue-500"
                    name="task"
                    id=""
                    onChange={ handleInput }
                    placeholder="Enter a task" />
               <input
                    type="submit"
                    className="mt-2 cursor-pointer rounded-md border-2 border-opacity-40 bg-green-600 p-2 px-3 text-white font-bold outline-none float-left"
                    value="Save" />
          </form>
     </div>
     );
}

export default TaskForm;