import React from 'react'
import { Link } from 'react-router-dom';


const CTALogin = () => {
  return (
    <div>
      <h3>Are you registered?</h3>
      <Link to='/Login' className=''>
          <p>Login</p>
      </Link>
    </div>
  )
}

export default CTALogin








