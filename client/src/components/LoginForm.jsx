import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const LoginForm = ({ onSubmit, onChange, errors, successMessage, user }) => (
  <div className="centerv centerh wrapper-auth">
    <form action="/" onSubmit={onSubmit} >
      <h2 className="text-center title-auth"><span className="ui-title">Log in</span></h2>

      <div>

        {successMessage && <p className="errors-form">{successMessage}</p>}
        {errors.summary && <p className="errors-form">{errors.summary}</p>}

        <div className="fcol">
          <input
            type="text"
            name="email"
            placeholder="Email"
            errortext={errors.email}
            onChange={onChange}
            value={user.email}
            autoFocus
          />
          <p className="errors-form">{errors.email}</p>
        </div>

        <div className="fcol">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
            errortext={errors.password}
            value={user.password}
          />
        <p className="errors-form">{errors.password}</p>
        </div>

      </div>

      <div>
        <input className="btn btn-auth" type="submit" value="Log in" />
        <div className="frow">
          <p>Don’t have an account? &nbsp;</p>
          <Link to="/signup">
            <p className="account-link">Create one</p>
          </Link>
        </div>
      </div>

    </form>
  </div>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
