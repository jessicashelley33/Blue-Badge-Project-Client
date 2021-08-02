import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/contact.css'

const Contact = () => {
    return(
        <div className="bgLight">
            <h3 className="lead text-center display-4 mt-5">Contact Us</h3>
            <form className="container mt-5">
        <div className="row">
            <div className="col-sm-12 col-md-12">
            <div className="form-floating mb-3"
            style={{
                width:'600px'}}
            >
                <input type="email" class="form-control" id="floatingInput" placeholder="Email Address" />
                <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating"
                style={{
                    width:'600px'}}
                >
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"
                    }}></textarea>
                    <label htmlFor="floatingTextarea2">Comments</label>
                    </div>
                </div>
                </div>
        <div className="row align-items-center">
            <div className="col">
            <div className="d-grid gap-2  col-sm-12 col-md-6 mx-auto mt-5">
                <button className="btn btnContact" type="button">Submit Form</button>
                </div>
            </div>
        </div>
    </form>
        
        </div>
    )
}

export default Contact