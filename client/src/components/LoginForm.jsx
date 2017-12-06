import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const LoginForm = ({ onSubmit, onChange, errors, successMessage, user }) => (
  <div className="centerv centerh wrapper-auth">
    <form action="/" onSubmit={onSubmit} >
      <h2 className="text-center title-auth">Log in</h2>

      <div>

        {successMessage && <p>{successMessage}</p>}
        {errors.summary && <p>{errors.summary}</p>}

        <div className="fcol">
          <input
            name="email"
            placeholder="Email"
            errortext={errors.email}
            onChange={onChange}
            value={user.email}
            autoFocus
          />
          <p>{errors.email}</p>
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
        <p>{errors.password}</p>
        </div>

      </div>

      <div>
        <input className="btn" type="submit" value="Log in" />
        <Link to="/signup">
          <p>I don’t have an account</p>
        </Link>
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
