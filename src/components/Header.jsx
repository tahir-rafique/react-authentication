import React from 'react'
import { Link } from 'react-router'

const Header = () => {
    return (
        <div className='h-10 bg-green-300  px-10 py-1 flex justify-around items-center'>
            <Link to='/'>Home</Link>
            <Link to="/login">Login</Link>
            <Link to={"/profile"}>Profile</Link>
        </div>
    )
}

export default Header