import React from 'react'
import { Link } from 'react-router-dom';


const DashboardLink = () => {
  return (
    <div>
    <Link to='/dashboard' className=''>
        <p>Link to Dashboard</p>
    </Link>
</div>
  )
}

export default DashboardLink