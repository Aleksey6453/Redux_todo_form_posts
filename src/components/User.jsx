import React from 'react'
import Name from './Name'
import StreetName from './StreetName'

const User = () => {
  return (
    <>
      <input 
        type="text"
        className='input m_b'
        placeholder='Name'
      />
      <input 
        type="text"
        className='input'
        placeholder='Street Name'
      />
      <div className="user_current">
        <div className="user_current_block">
            <h3>Name:</h3>
            <Name />
        </div>
        <div className="user_current_block">
            <h3>Street Name:</h3>
            <StreetName />
        </div>
        
      </div>
    </>
  )
}

export default User
