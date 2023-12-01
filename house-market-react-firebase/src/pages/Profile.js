import { useState } from 'react'
import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth } from "firebase/auth"
import Layout from '../components/Layout/Layout'
import { toast } from 'react-toastify'

const Profile = () => {
    const navigate = useNavigate()
    const auth = getAuth()
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email
    })
    const { name, email } = formData

    const logoutHandle = () => {
        auth.signOut()
        toast.success("Logout Success")
        navigate("/")
    }
    return (
        <Layout>
            <div className='container w-50 mt-4 d-flex justify-content-between'>
                <h4>Profile Details</h4>
                <button className='btn btn-danger' onClick={logoutHandle}>Logout</button>
            </div>
            <p>{name}</p>
            <p>{email}</p>
        </Layout>
    )
}

export default Profile
