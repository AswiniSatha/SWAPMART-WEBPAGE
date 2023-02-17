import React, { Component } from 'react'
import './Signup.css';
export default class Signup extends Component {
  render() {
    return (
        <div className='Sign_form'>
      <form>
        <h3 className='signup_title'>Sign Up</h3>
        <div className="mb-3">
          <label className='signuplabel'>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name" required
          />
        </div>
        <div className="mb-3">
          <label className='signuplabel'>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label className='signuplabel'>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email" required
          />
        </div>
        <div className="mb-3">
          <label className='signuplabel'>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password" required
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/SignIn">sign in?</a>
        </p>
      </form>
      </div>
    )
  }
}