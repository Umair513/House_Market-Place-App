import React from 'react'

const Spinner = () => {
    return (
        <div>
            <div className="d-flex spinner-border text-primary mx-auto ms-auto mt-5" role="status" style={{ height: "500px", width: "500px", padding: "20px" }}>
                <span className="visually-hidden">Loading...</span>
            </div>

        </div>
    )
}

export default Spinner
