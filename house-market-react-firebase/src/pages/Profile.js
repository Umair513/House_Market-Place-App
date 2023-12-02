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
import { doc, updateDoc } from 'firebase/firestore'

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
    const [changeDetails, setChangeDetails] = useState(false)
    const onSubmit = async () => {
        try {
            if (auth.currentUser.displayName !== name) {
                await updateProfile(auth.currentUser, {
                    displayName: name
                })
                const userRef = doc(db, "users", auth.currentUser.uid)
                await updateDoc(userRef, { name })
                toast.success("User Updated")
            }
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }
    }
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
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
                        <span style={{ cursor: "pointer" }} onClick={() => { changeDetails && onSubmit(); setChangeDetails(prevState => !prevState) }}>
                            {changeDetails ? <MdDoneOutline color='red' /> : <FaEdit color='green'></FaEdit>}
                        </span>
                    </div>
                </div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" value={name} onChange={onChange} disabled={!changeDetails} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" value={email} onChange={onChange} disabled={!changeDetails} />
                        </div>



                    </form>

                </div>
            </div>

        </Layout>
    )
}

export default Profile
