import React from 'react'
import Logo from '../Logo'

function Login() {
  return (
    <div className='login'>Login


      <Logo />

      <br/>
      <label>Learnership Login</label>

      <label for="username" placeholder='Username'></label>
      <br/>
      <br/>
      <input type="text" id="username"></input>
      <br/><br/>
      <label for="email" placeholder='Email'></label>
      <br/>
      <br/>
      <input type="text" id="email"></input>

    </div>
  )
}

export default Login