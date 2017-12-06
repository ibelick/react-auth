import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../modules/Auth'
import Dashboard from '../components/Dashboard.jsx'
import Header from '../containers/Header.jsx'

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secretData: ''
    };
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message
        });
      }
    });
    xhr.send();
  }

  render() {
    return (
      <div>
        <Header />
        <Dashboard secretData={this.state.secretData} />
      </div>
    );
  }

}

export default DashboardPage;
