import React from 'react'
import Header from '../../components/Header/Header'
import CTALogin from '../../components/CTALogin/CTALogin'
import CTARegister from '../../components/CTARegister/CTARegister'
import DashboardLink from '../../components/DashboardLink/DashBoardLink'
import './Home.css'
// import { Link } from 'react-router-dom';


const Home = () => {
  return (
      <>
      <Header />
      <div className='home-container'>
        <div className='text-container'>
          <h2>Make it efficient</h2>
          <p >
            Keep track of all your income and expenses,focusing on your account balance 
            and improve your financial habits with this simple and intuitive web app.
          </p>
        </div>
        <img className='welcome' alt='finance icons' src={require('../../Images/welcome.jpg')} />
      </div>

      <div className='buttons-container'>
        <CTARegister />
        <CTALogin />
      </div>
      <DashboardLink />

      </>
    
  )
}

export default Home