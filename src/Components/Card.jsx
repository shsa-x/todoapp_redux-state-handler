import React, { useState, useEffect, useRef } from 'react'
import { todos } from '../useStore';


function Card({id, todo}) {

  const [editable, setEditable] = useState(false)
    const [img, setImg] = useState('https://res.cloudinary.com/dfl8h4on4/image/upload/v1720172831/edit_fx7yb0.png')
    const [tittle, setTittle] = useState(todo.title);
    const inputRef = useRef(null);


    useEffect(() => {
      if (editable && inputRef.current) {
        inputRef.current.focus();
      }
    }, [editable]);

    const completeTodo = () => {

      todos.setState(state => ({
        ...state,
        [id]: {
          ...state[id],
          isComplete: !state[id].isComplete 
        }
      }))
    }

    const editTodo = () => {

      todos.setState(state => ({
        ...state,
        [id]: {
          ...state[id],  
          title: tittle   
        }
      }));

    }

    const deleteTodo = () => {
      todos.setState(state => {
        const newState = { ...state };  
        delete newState[id];           
        return newState;               
      });
    }


    const edit_save = () => {
        if(editable){
            setEditable(editable => !editable);
            setImg('https://res.cloudinary.com/dfl8h4on4/image/upload/v1720172831/edit_fx7yb0.png');
            editTodo();
        }
        else{
            setEditable(editable => !editable);
            setImg('https://res.cloudinary.com/dfl8h4on4/image/upload/v1720173040/save_wzdxaz.png');
        }
    }

  return (
    
    <div className={ `bg-blue-300 todo-item flex items-center justify-between  ${todo.isComplete ? ' bg-orange-400 line-through' : ' '}  rounded-md p-1 mt-2 mb-2 min-w-[100%]`}
    >
      <div className='flex items-center ' >
        <input 
        onChange={completeTodo}
        className='mt-3 mb-3 ml-2 mr-2'
        type="checkbox" />
        <input  
            ref={inputRef}
            disabled={!editable} 
            onChange={(e) => setTittle(e.target.value)} 
            value={tittle}
            className={`text-black w-72 focus:outline-none p-1 text-xl ${todo.complete ? 'line-through' : ' '} bg-transparent font-semibold`} 
            type="text" 
        />
      </div> 
     <div className='flex  items-center gap-4 ml-3 mr-3'>
        <button onClick={edit_save} ><img className='w-7' src={img} alt="" /></button>
        <button onClick={deleteTodo} ><img className='w-8' src="https://res.cloudinary.com/dfl8h4on4/image/upload/v1720173004/trash_xwacrq.png" alt="delete" /></button>
     </div>
    </div>
  )
}

export default Card
