import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
import { v4 } from 'uuid'

const Form = () => {

  const addTodoHandler = () => {
    const todo = {
      id: v4(),
      text: todoValue,
      completed: false
    }

    dispatch(addTodo(todo))
    setTodoValue('')
  }
  const dispatch = useDispatch()
  const [todoValue, setTodoValue] = React.useState('')
  return (
    <form onSubmit={(e)=> e.preventDefault()}>
      <input 
        type="text"
        value={todoValue}
        className='input m_b'
        placeholder='Type something...'
        onChange={(e)=>{setTodoValue(e.target.value)}}
      />
      <button className='btn m_b' type='submit' onClick={()=>addTodoHandler()}>
        Submit
      </button>
    </form>
  )
}

export default Form
