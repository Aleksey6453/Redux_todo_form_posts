import React from 'react'

const TodoItem = () => {
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
          Todo Text
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
