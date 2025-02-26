/* import React, { act, useState } from 'react'
import './LoginSignup.css'

import user from '../Assets/user.png'
import email from '../Assets/email.png'
import unlock from '../Assets/unlock.png'


const LoginSingup = () => {

    const [action,setAction] = useState("Sign Up");

  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action==="Login"?<div></div>:<div className='input'>
                <img src={user} alt='' />
                <input type='text' placeholder='Name' />
            </div>}
            <div className='input'>
                <img src={email} alt='' />
                <input type='email' placeholder='Email id' />
            </div>
            <div className='input'>
                <img src={unlock} alt='' />
                <input type='password' placeholder='Password' />
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Clike Here!</span></div>}
        <div className='submit-container'>
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>

        </div>
    </div>
  )
}

export default LoginSingup */

import React, { useState } from 'react';
import './LoginSignup.css';

import user from '../Assets/user.png';
import email from '../Assets/email.png';
import unlock from '../Assets/unlock.png';

const LoginSignup = () => {
  const [action, setAction] = useState('Sign Up');

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === 'Login' ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user} alt="User" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img src={email} alt="Email" />
          <input type="email" placeholder="Email id" />
        </div>

        <div className="input">
          <img src={unlock} alt="Password" />
          <input type="password" placeholder="Password" />
        </div>
      </div>

      {action === 'Sign Up' ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === 'Login' ? 'submit gray' : 'submit'}
          onClick={() => {
            setAction('Sign Up');
          }}
        >
          Sign Up
        </div>
        <div
          className={action === 'Sign Up' ? 'submit gray' : 'submit'}
          onClick={() => {
            setAction('Login');
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
