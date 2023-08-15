import React from 'react'
import {NavLink, useLocation } from 'react-router-dom';

function BreadCrumb() {
    const location = useLocation();
  return (
    <div className='bg-color text-white mb-4 text-start'>
          <div className="container py-4">
              <h3 className='mt-2'>Men's Wear</h3>
              <nav className='d-flex mb-2'>
                  {/* <h1 className='text-white-50 mx-2'>
                      {location.pathname.split('/')[1]}
                  </h1> */}
          <NavLink to='/' className='text-decoration-none text-white-50 me-2 fs-5'>Home > </NavLink>
          <span className='text-capitalize fs-5'>{location.pathname.split('/')[1]}</span>
              </nav>
      </div>
    </div>
  )
}

export default BreadCrumb
