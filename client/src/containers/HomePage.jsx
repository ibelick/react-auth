import React, { Component } from 'react'
import Auth from './../modules/Auth'
import Header from './../containers/Header.jsx'
import DashboardPage from './DashboardPage.jsx';
import LoginPage from './LoginPage.jsx';

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        {Auth.isUserAuthenticated() == false ? (
          <LoginPage />
        ) :
        (
          <DashboardPage />
        )}
      </div>
    )
  }
}


export default HomePage
