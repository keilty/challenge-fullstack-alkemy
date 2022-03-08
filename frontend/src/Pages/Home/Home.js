import React from 'react'
import Header from '../../components/Header/Header'
import './Home.css'
import { Link } from 'react-router-dom';


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
          <div>
        <h3>First time here?</h3>
        <Link to='/register' className=''>
            <p>Create an account</p>
        </Link>
          </div>
          
          <div>
        <h3>Are you registered?</h3>
        <Link to='/Login' className=''>
            <p>Login</p>
        </Link>
          </div>
    
      </div>

      </>
    
  )
}

export default Home