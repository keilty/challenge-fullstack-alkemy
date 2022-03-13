import React from 'react'
import './Register.css'
import CTALogin from '../../components/CTALogin/CTALogin'
import DashboardLink from '../../components/DashboardLink/DashBoardLink'



const Register = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The form has been submitted`)
  }

  return (
    <>
      <h1>Create a new account</h1>

      
        <form onSubmit={handleSubmit} className='form'>

          <label htmlFor="userName">User Name</label>
          <input type="text" id='userName' placeholder='Enter your User Name here'/>

          <label htmlFor="email">Email</label>
          <input type="email" id='email' placeholder='Enter your Email here'/>

          <label htmlFor="name">Password</label>
          <input type="password" id='password' placeholder='Enter your Password here'/>

          <input type="submit" value="Register"/>

        </form>

        <CTALogin />

        <DashboardLink />

      
    </>
  )
}

export default Register