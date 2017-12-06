import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {Redirect} from 'react-router-dom';
import SignUpForm from './../components/SignUpForm.jsx'

class SignUpPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      errors: {},
      user: {
        email: '',
        name: '',
        password: ''
      }
    }
    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  changeUser(e) {
    const field = e.target.name
    const user = this.state.user
    user[field] = e.target.value
    this.setState({user})
  }

  processForm(e) {
    e.preventDefault();
    const name = encodeURIComponent(this.state.user.name);
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `name=${name}&email=${email}&password=${password}`;

    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/signup');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          errors: {}
        });
        console.log('The form is valid');
        localStorage.setItem('successMessage', xhr.response.message);
        this.setState({redirect: true});
      } else {
        const errors = xhr.response.errors ? xhr.response.errors : {}
        errors.summary = xhr.response.message
        this.setState({
          errors
        })
      }
    })
    xhr.send(formData);
  }

  render() {
    return (
      <div>
        {this.state.redirect == false ?(
          <div>
            <SignUpForm
              onSubmit={this.processForm}
              onChange={this.changeUser}
              errors={this.state.errors}
              user={this.state.user}
            />
          </div>
        ):
        (
          <Redirect to='/login' />
        )
        }
      </div>
    )
  }

}

export default SignUpPage
