import React from 'react'
import Layout from '../components/Layout/Layout'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate()
    const img1 = "https://media.istockphoto.com/id/1436217023/photo/exterior-of-a-blue-suburban-home.webp?b=1&s=170667a&w=0&k=20&c=oEpszLJm7Hk3Q7qshJvde1P6tfaW5EJsmsYzOuuHGR8="
    const img2 = "https://media.istockphoto.com/id/1448381278/photo/the-side-view-of-a-large-gray-craftsman-new-construction-house-with-a-landscaped-yard-a-three.webp?b=1&s=170667a&w=0&k=20&c=pHHNxKMgY-i5VMo9nd4viatxxhGVbD8X6ZUwRqQlwVw="
    return (
        <Layout>
            <div className='container mt-3'>
                <div className="row">
                    <h1>Category</h1>
                    <div className="col-md-5">
                        <div className="ImageContainer">
                            <img src={img1} alt='rent' style={{ width: "100%" }}></img>
                            <button className='btn' onClick={() => navigate("/category/rent")}>To RENT</button>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="ImageContainer">
                            <img src={img2} alt='rent' style={{ width: "100%" }}></img>
                            <button className='btn' onClick={() => navigate("/category/sale")}>To SALE</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default HomePage
