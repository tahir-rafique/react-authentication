import React from 'react'
import { Link } from 'react-router'

const Header = () => {

    const handleLogout = () => {
        setUserData()
        localStorage.removeItem("token");
        alert("Log out success");
    }
    return (
        <div className='h-10 bg-blue-300  px-10 py-1 flex justify-around items-center border-b border-black'>
            <Link className='hover:border-b-2 hover:border-rose-600' to='/'>Home</Link>
            <Link className='hover:border-b-2 hover:border-rose-600' to="/login">Login</Link>
            <Link className='hover:border-b-2 hover:border-rose-600' to={"/profile"}>Profile</Link>
            <p onClick={handleLogout} className='hover:border-b- 2 hover:bg-rose-600 bg-rose-50 px-2' >LogOut</p>
        </div>
    )
}

export default Header