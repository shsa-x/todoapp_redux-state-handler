import React, { useState } from 'react'
import { todos } from '../useStore';


function InputForm() {

    const [tittle, setTittle] = useState('');

    const addTodo = () => {
      const id = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;

      const newTodo = {
        title: tittle,
        isComplete: false,
      };
      
      todos.setState(state => ({...state, [id]: newTodo }))
      
      setTittle("")
    }


   

    
  return (
    <div className= ' flex rounded-md justify-between items-center mb-8' >
      <input 
        onChange={(e) => {setTittle(e.target.value)}} 
        value={tittle}  
        className='input-field  todo-input text-2xl p-2  rounded-md bg-gray-200 font-semibold '  
        type="text" 
        placeholder='Enter tittle here..' 
      />
      <button 
        
        onClick={addTodo}  
        className='bg-blue-500  text-2xl p-2  text-white font-semibold rounded-md'
        style={{height: ''}}
      >Add Todo</button>
    </div>
  )
}

export default InputForm
