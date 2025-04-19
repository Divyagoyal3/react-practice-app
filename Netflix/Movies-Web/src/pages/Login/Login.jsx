import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
const Login = () => {
  return (
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>Sign Up</h1>
        <form action="">
          <input type = "text" placeholder='Your Name' />
          <input type="email" placeholder='Email or phone number' />
          <input type="password" placeholder='Password' />
          <button className='login-btn'>Sign Up</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form> 
        <div className="form-switch">
          <p>New to Netflix ? <span>Sign Up Now</span></p>
          <p>Already have an Account ? <span>Sign In Now</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login
