import React, { Component } from 'react'
import './Signin.css';
export default class Signup extends Component {
  render() {
    return (
        <div className='Login_form'>
      <form>
        <h3 className='signup_title'>Login</h3>
        <div className="mb-3">
          <label className='signuplabel'>Email address</label>
          <input
            type="email"
            className="form-control" id='login_input'
            placeholder="Enter email" required
          />
        </div>
        <div className="mb-3">
          <label className='signuplabel'>Password</label>
          <input
            type="password"
            className="form-control" id='login_input'
            placeholder="Enter password" required
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" id="login-btn">
            Login
          </button>
        </div>
        <p className="forgot-password text-right">
          New User <a href="/Signup">sign up?</a>
        </p>
      </form>
      </div>
    )
  }
}