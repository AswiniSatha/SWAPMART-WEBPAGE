import axios from 'axios';
import React from 'react'
import { useState , useEffect} from 'react';
import './Signin.css';
function SignIn(){
  const [loginDetails, setLoginDetails] = useState([]);
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  useEffect(()=>{
    axios.get("https://fir-react-fd4d2-default-rtdb.asia-southeast1.firebasedatabase.app/logindetails.json")
    .then(response=>{
      let logindetail_data=[];
      for(let key in response.data)
      {
        console.log(response.data[key]);
        logindetail_data.push(response.data[key]);
      }
      setLoginDetails(logindetail_data);
      console.log(logindetail_data);
    })
  },[]);
  const Handlelogindetails=(event)=>{
    event.preventDefault();
    if (email === '' ||  pwd === '') {
      alert('Please fill in all the fields')
      return
  }
//   for (const [key, value] of loginDetails) {
//     console.log(`The value for key ${key} is ${value}`);
// }
for(let key in loginDetails)
{
  console.log(loginDetails[key].Email);
  if(email===loginDetails[key].Email && pwd===loginDetails[key].Password)
  {
    alert(' Logged In Successfully');
    setEmail('');
 setPwd('');
 return;
  }else{
    setCount(1);
 }}
 if(count===1){
  alert('Invalid Email or Password. Please try again');
  setEmail('');
 setPwd('');
 }
 }
    return (
        <div className='Login_form'>
      <form onSubmit={Handlelogindetails}>
        <h3 className='signup_title'>Login</h3>
        <div className="mb-3">
          <label className='signuplabel'>Email address</label>
          <input
            type="email"
            className="form-control" id='login_input'
            placeholder="Enter email" required value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className="mb-3">
          <label className='signuplabel'>Password</label>
          <input
            type="password"
            className="form-control" id='login_input'
            placeholder="Enter password" required value={pwd} onChange={(e)=>{setPwd(e.target.value)}}
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


  export default SignIn;