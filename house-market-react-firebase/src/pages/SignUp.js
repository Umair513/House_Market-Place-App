import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { BsFillEyeFill } from "react-icons/bs"
import Layout from '../components/Layout/Layout'

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        password: ""
    })
    const { name, email, password } = formData
    const onChange = () => {

    }
    return (
        <Layout>
            <div className='d-flex align-items-center justify-content-center w-100 mt-4'>
                <form className='bg-light p-4'>
                    <h4 className='bg-dark p-2 mt-2 text-light text-center'>Sign Up</h4>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" value={name} className="form-control" id="name" aria-describedby="nameHelp" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" value={email} onChange={onChange} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" value={password} onChange={onChange} className="form-control" id="password" />
                        <span>show password <BsFillEyeFill className='text-danger' onChange={() => setShowPassword((prevState) => !prevState)}></BsFillEyeFill></span>
                    </div>

                    <button type="submit" className="btn btn-primary">Sign Uo</button>
                    <div>
                        <h6>Login with Google</h6>
                        <span>Already User</span> <Link to="/signin">Login</Link>
                    </div>
                </form>

            </div>
        </Layout>
    )
}

export default SignUp
