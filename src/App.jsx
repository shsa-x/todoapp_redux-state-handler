import './App.css'
import InputForm from './Components/InputForm'
import Card from './Components/Card'
import { todos } from './useStore'

function App() {

  

  return (
    <div 
    className='flex flex-col justify-between h-[80vh] '
    >
          <InputForm/>
          <div className='list  delay-75 h-[90%] overscroll-auto'>
          {
            Object.entries(todos.getState()).map(([id, todo]) => (
              <Card key={id} id={id} todo={todo} />
            ))
          }
          </div>
    </div>

  )


}

export default App
