import React from 'react'
import Name from './Name'
import StreetName from './StreetName'
import {useDispatch} from 'react-redux'
import { setName, setStreetName } from '../features/user/userSlice'


const User = () => {
  const dispatch = useDispatch()

  return (
    <>
      <input 
        type="text"
        className='input m_b'
        placeholder='Name'
        onChange = {(e)=>{
          dispatch(setName(e.target.value))
        }}
      />
      <input 
        type="text"
        className='input'
        placeholder='Street Name'
        onChange={(e)=>{
          dispatch(setStreetName(e.target.value))
        }}
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
