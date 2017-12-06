import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {Redirect} from 'react-router-dom';
import Auth from '../modules/Auth';
import LoginForm from '../components/LoginForm.jsx'
import Profile from './../containers/Profile.jsx'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      errors: {},
      user: {
        email: '',
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
    this.setState({ user })
  }

  processForm(e) {
    e.preventDefault()
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `email=${email}&password=${password}`;

    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/login');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          errors: {}
        });
        Auth.authenticateUser(xhr.response.token);
        localStorage.setItem('usrname', JSON.stringify(xhr.response.user));
        console.log(JSON.parse(localStorage.getItem('usrname')).name);
        this.setState({redirect: true});
      } else {
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  }

  render() {
    return (
      <div>
      {this.state.redirect == false? (
        <div>
          <LoginForm
            onSubmit={this.processForm}
            onChange={this.changeUser}
            errors={this.state.errors}
            successMessage={this.state.successMessage}
            user={this.state.user}
          />
        </div>
      ):(
        <Redirect to='/' />
      )
      }
      </div>
    )
  }

}

export default LoginPage
