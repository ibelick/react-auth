import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Auth from '../modules/Auth';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
    this.onLogOutClicked = this.onLogOutClicked.bind(this);
  }

  onLogOutClicked() {
    Auth.deauthenticateUser();
  }

  render() {
    return (
      <header className="frow spaceb">
        <div className="header-left">
          <Link to='/'>Auth app</Link>
        </div>

        {Auth.isUserAuthenticated() ? (
          <div className="header-right">
            <Link to="/posts">Posts</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/" onClick={this.onLogOutClicked}>Log out</Link>
          </div>
        ) : (
          <div className="header-right">
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
          </div>
        )}

      </header>
    )
  }
}

export default Header
