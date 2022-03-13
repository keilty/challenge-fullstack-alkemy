import React from 'react'
import { Link } from 'react-router-dom';


const CTARegister = () => {
  return (
    <div>
        <h3>First time here?</h3>
        <Link to='/register' className=''>
            <p>Create an account</p>
        </Link>
    </div>
  )
}

export default CTARegister