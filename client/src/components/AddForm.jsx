import React from 'react'

const AddForm = ({ onSubmit, onChange, post }) => (
  <div className="wrapper-post">
    <form action="/" onSubmit={onSubmit} >
      <h2>Add post</h2>

      <div>
        <input
          name="title"
          placeholder="Title"
          onChange={onChange}
          value={post.title}
          autoFocus
        />
      </div>

      <div>
        <textarea
          name="text"
          placeholder="Text"
          onChange={onChange}
          value={post.text}
          autoFocus
        />
      </div>

      <div>
        <input className="btn" type="submit" value="Post"/>
      </div>

    </form>
  </div>
)

export default AddForm
