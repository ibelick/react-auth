import React, { Component } from 'react'
import PostService from './../service/PostService'
import AddForm from './../components/AddForm.jsx'
import Header from './../containers/Header.jsx'

class AddPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: {
        title: '',
        text: ''
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.addPostService = new PostService()
  }

  handleSubmit(e) {
    e.preventDefault()
    this.addPostService.sendData(this.state.post)
    this.props.history.push('/posts')
  }

  handleChange(e) {
    const field = e.target.name
    const post = this.state.post
    post[field] = e.target.value
    this.setState({ post })
  }

  render() {
    return (
      <div>
        <Header />
        <div className="fcol centerv">
          <AddForm
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            post={this.state.post}
          />
        </div>
      </div>
    )
  }
}

export default AddPage
