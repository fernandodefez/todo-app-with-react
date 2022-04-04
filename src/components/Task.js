import React from 'react';

function Task(props) {

     const { id, text, done, remove, complete } = props;

     return (
     <div 
          id="toast-success"
          className={ done ?
          "flex items-center w-full mb-5 rounded-md text-white bg-green-600 cursor-pointer p-0" :
          "flex items-center w-full mb-5 rounded-md text-white bg-zinc-700 cursor-pointer p-0" } 
          role="alert">
          <div 
               onClick={ () => complete(id) }
               className={ done ? "text-left w-full pl-4 py-3 text-sm font-bold line-through" : "text-left w-full pl-4 py-3 text-sm font-bold" } >
               { text }
          </div>
          <button 
               type="button"
               className="mr-3 p-0"
               data-dismiss-target="#toast-success"
               aria-label="Close"
               onClick={() => remove(id) }>
               <span className="sr-only"> 
                    Close
               </span>
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
     </div>
     );
}

export default Task;