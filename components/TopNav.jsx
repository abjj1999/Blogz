import React from 'react'
import Link from 'next/link'


const TopNav = () => {
  return (
    <nav className="
        nav shadow p-2 justify-content-between mb-3 font-weight-bold 
    ">
        <Link className='nav-link text-dark bg-info rounded  ' href="/">
            BLOGS
        </Link>

        <div className="d-flex ">
            <Link className='nav-link text-dark ' href="/login">
                LogIn
            </Link>
            <Link className='nav-link text-dark bg-primary' href="/register">
                Register
            </Link>
        </div>
    </nav>
  )
}

export default TopNav
