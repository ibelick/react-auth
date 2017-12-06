import React from 'react'

const Post = ({post}) => (
  <div className="wrapper-post">
    <h3>{post.title}</h3>
    <p>{post.text}</p>
  </div>
)

export default Post
