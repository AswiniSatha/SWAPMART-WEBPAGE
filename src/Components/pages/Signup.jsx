import React, {useState } from 'react'
import { Component } from 'react';
import './Signup.css';
import axios from 'axios';

// export default class Signup extends Component {
  function Signup() {

    const [firstname, setFirstname]=useState('');
    const [lastname, setLastname]=useState('');
    const [email, setEmail]=useState('');
    const [pwd, setPwd]=useState('');

    const handlelogin = (event) => {
      event.preventDefault();
      console.log(firstname, email, lastname, pwd);
  
      if (firstname === '' || email === '' || lastname === '' || pwd === '') {
        alert('Please fill in all the fields')
        return
      }
    axios.post("https://fir-react-fd4d2-default-rtdb.asia-southeast1.firebasedatabase.app/logindetails.json",
           {
            "Firstname":firstname,
            "Lastname":lastname,
            "Email":email,
            "Password":pwd
    }).then((response)=>{
      alert("Signed Up Successfully");
      setFirstname('');
      setLastname('');
      setEmail('');
      setPwd('');
    }).catch((error)=>{
      alert("Unable to Sign Up ");
    })
  }
    return (
        <div className='Sign_form'>
      <form onSubmit={handlelogin}>
        <h3 className='signup_title'>Sign Up</h3>
        <div className="mb-3">
          <label className='signuplabel'>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name" value={firstname} required onChange={(e)=>{setFirstname(e.target.value)}}/>
        </div>
        <div className="mb-3">
          <label className='signuplabel'>Last name</label>
          <input type="text" className="form-control" placeholder="Last name"  value={lastname} required onChange={(e)=>{setLastname(e.target.value)}}/>
        </div>
        <div className="mb-3">
          <label className='signuplabel'>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email" value={email} required onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label className='signuplabel'>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password" value={pwd} required onChange={(e)=>{setPwd(e.target.value)}}
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


export default Signup;