import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Post from './../components/Post.jsx'
import Header from '../containers/Header.jsx'

class PostPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: ''
    }
    this.postsList = this.postsList.bind(this)
  }

  componentDidMount() {
    axios.get('/posts')
      .then(response => {
        let posts = response.data
        this.setState({ posts })
      })
      .catch(error => console.log(error))
  }

  postsList() {
    if (this.state.posts instanceof Array) {
      return (
        this.state.posts.map((post, index) => {
          return <Post
            key={index}
            post={post}
            />
        })
      )
    }
  }

  render () {
    return (
      <div>
        <Header />
        <div className="fcol centerv">
          {this.postsList()}
          <Link to="/add">
            <p className="btn">Add a post</p>
          </Link>
        </div>
      </div>
    )
  }
}

export default PostPage
