import React, { Component } from 'react'
import Auth from './../modules/Auth'
import Header from './../containers/Header.jsx';

const ProfileUI = ({ user }) => (
  <div>
    <p>Oh hi</p>
    <p>I need to store user with redux 😵</p>
  </div>
)

class Profile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      <Header />
      <ProfileUI user={this.props.user}/>
      </div>
    )
  }
}

export default Profile
