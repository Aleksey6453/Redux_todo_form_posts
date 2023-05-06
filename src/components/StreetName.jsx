import React from 'react'
import { useSelector } from 'react-redux'

const StreetName = () => {
  const streetName = useSelector((state)=>state.user.streetName)
  return (
    <div>
      <b>{streetName}</b>
    </div>
  )
}

export default StreetName
