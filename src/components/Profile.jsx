import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Profile = () => {
    const [userData, setUserData] = useState()

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProfileData();
    }, [])


    const getProfileData = () => {
        const token = JSON.parse(localStorage.getItem('token'))
        const header = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios.get('https://api.escuelajs.co/api/v1/auth/profile', header)
            .then((res) => {
                setLoading(false)
                setUserData(res.data)
                console.log("profile data", res)
            })
            .catch((err) => {
                setLoading(false)
                alert("You are not logged in")
                console.log("Error occured", err)
            })
    }


    return (
        <div className='py-5 bg-rose-300 flex justify-center'>
            <div className='flex  justify-around  w-full'>


                {loading
                    ?
                    <p className='bg-yellow-300 px-10 py-2 text-3xl'>Loading.....</p>
                    :
                    userData &&
                    <div>
                        <p>Name : {userData?.name || "N/A"} </p>
                        <p>Email : {userData?.email || "N/A"}</p>
                        <p>Role : {userData?.role || "N/A"}</p>
                        <img className='rounded-full h-20 w-20' src={userData?.avatar} alt="Avatar" />
                    </div>
                }

            </div>
        </div>
    )
}

export default Profile