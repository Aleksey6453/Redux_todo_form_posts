import React from 'react'

const TodoItem = ({todo}) => {
    const completed = false
  return (
    <div className='user_current'>
      <div>
        <b>
          Complete
        </b>
      </div>
      <div>
        <b>
          {todo.text}
        </b>
      </div>
      <div>
        <b>
           Delete
        </b>
      </div>
    </div>
  )
}

export default TodoItem
