import React from 'react'
import Link from 'next/link'


const TopNav = () => {
  return (
    <nav className="
         nav shadow p-2 justify-content-between mb-3 font-weight-bold 
    ">
        <Link className='nav-link top_nav_style ' href="/">
            BLOGS
        </Link>

        <div className="d-flex ">
            <Link className='nav-link top_nav_style' href="/login">
                LogIn
            </Link>
            <Link className='nav-link top_nav_style' href="/register">
                Register
            </Link>
        </div>
    </nav>
  )
}

export default TopNav
