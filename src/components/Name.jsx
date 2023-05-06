import React from 'react'
import { useSelector } from 'react-redux'

const Name = () => {
  const name = useSelector((state)=>state.user.name)
  return (
    <div>
      <b>{name}</b>
    </div>
  )
}

export default Name
