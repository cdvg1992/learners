import React from 'react'
import Logo from '../Logo'

function Login() {
  return (
    <div className='login'>Login


      <Logo />

      <br/>
      <label>Learnership Login</label>

      <input type="text" id="username" placeholder='Username'></input>
      <br/><br/>
      <input type="text" id="username" placeholder='Password'></input>
      <br/>
      <br/>
      
    </div>
  )
}

export default Login