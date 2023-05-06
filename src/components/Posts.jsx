import React from 'react'
import PostItem from './PostItem'

const Posts = () => {
  return (
    <div>
      <button className='btn' type='submit'>Get Posts</button>
      <PostItem />
    </div>
  )
}

export default Posts
