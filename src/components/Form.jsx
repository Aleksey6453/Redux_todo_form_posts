import React from 'react'

const Form = () => {
  return (
    <>
      <input 
        type="text"
        className='input m_b'
        placeholder='Type something...'
      />
      <button className='btn m_b' type='submit'>
        Submit
      </button>
    </>
  )
}

export default Form
