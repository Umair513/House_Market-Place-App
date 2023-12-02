import { useState } from 'react'
import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, updateProfile } from "firebase/auth"
import Layout from '../components/Layout/Layout'
import { toast } from 'react-toastify'
import { db } from "../firebase.config"
import { FaEdit } from "react-icons/fa"
import { MdDoneOutline } from "react-icons/md"

const Profile = () => {
    const navigate = useNavigate()
    const auth = getAuth()
    const [formData, setFormData] = useState({
        // name: auth.currentUser.displayName,
        // email: auth.currentUser.email
    })
    const { name, email } = formData

    const logoutHandle = () => {
        auth.signOut()
        toast.success("Logout Success")
        navigate("/")
    }
    const [changeDetails, setChangeDetails] = useState(false)
    const onsubmit = () => {
        console.log("click")
    }
    return (
        <Layout>
            <div className='container w-50 mt-4 d-flex justify-content-between'>
                <h4>Profile Details</h4>
                <button className='btn btn-danger' onClick={logoutHandle}>Logout</button>
            </div>
            <div className="card container mt-4" style={{ width: '18rem' }}>
                <div className="card-header">
                    <div className="d-flex justify-content-between">
                        <p>User Personal Details</p>
                        <span style={{ cursor: "pointer" }} onClick={() => { changeDetails && onsubmit(); setChangeDetails(prevState => !prevState) }}>
                            {changeDetails ? <MdDoneOutline color='red' /> : <FaEdit color='green'></FaEdit>}
                        </span>
                    </div>
                </div>
                <div className="card-body">

                </div>
            </div>

        </Layout>
    )
}

export default Profile
