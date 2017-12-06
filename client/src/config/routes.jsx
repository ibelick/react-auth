import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  HashRouter, //for testing without server rending
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import Auth from './../modules/Auth'
import HomePage from './../containers/HomePage.jsx'
import LoginPage from './../containers/LoginPage.jsx'
import SignUpPage from './../containers/SignUpPage.jsx'
import DashboardPage from './../containers/DashboardPage.jsx'
import Profile from './../containers/Profile.jsx'
import AddPage from './../containers/AddPage.jsx'
import PostPage from './../containers/PostPage.jsx'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUpPage} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/add" component={AddPage} />
      <PrivateRoute path="/posts" component={PostPage} />
    </Switch>
  </Router>
)

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={(props) => Auth.isUserAuthenticated() === true
      ? <Component {...props} />
      : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
  />
)

export default Routes
