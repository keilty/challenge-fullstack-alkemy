import React from 'react'
import './Login.css'
import CTARegister from '../../components/CTARegister/CTARegister'
import DashboardLink from '../../components/DashboardLink/DashBoardLink'


const Login = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Login Succesfully`)
  }

  return (
    <>
      <h1>Log in to your account</h1>

      
      <form onSubmit={handleSubmit} className='form'>

        <label htmlFor="userName">User Name</label>
        <input type="text" id='userName' placeholder='Enter your User Name here'/>

        <label htmlFor="name">Password</label>
        <input type="password" id='password' placeholder='Enter your Password here'/>

        <input type="submit" value="Login"/>

      </form>

      <CTARegister />

      <DashboardLink />

    </>
  )
}

export default Login