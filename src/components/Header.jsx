import React from 'react'
import { Link } from 'react-router'

const Header = () => {


    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem("token");
        alert("Log out success");
    }
    return (
        <div className='h-10 bg-blue-300  px-10 py-1 flex justify-around items-center border-b border-black'>
            <Link className='hover:border-b-2 hover:border-rose-600' to='/'>Home</Link>
            <Link className='hover:border-b-2 hover:border-rose-600' to={"/profile"}>Profile</Link>

            {token ?
                <button onClick={handleLogout} className=' bg-rose-50 px-2' >LogOut</button>
                :
                <Link className='hover:border-b-2 hover:border-rose-600' to="/login">Login</Link>
            }
        </div>
    )
}

export default Header