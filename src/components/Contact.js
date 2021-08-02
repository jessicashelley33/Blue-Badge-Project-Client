import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/contact.css'

const Contact = () => {
    return(
        <div id="contact">
            <div className="bgLight">
                <h2 className="text-center lead display-2 mb-5 ">Contact Us</h2>
                <div className="row">
                <div className="col-sm-12 col-md-12">
                <div className="form-floating mb-4"
                style={{
                    width:'500px'
                }}
                >
                <input type="email" className="form-control" id="floatingInput"/>
                <label htmlFor="floatingInput"><span className="text-dark fw-bolder">Email</span></label>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-12">
                <div className="form-floating"
                style={{
                    width:'500px'
                }}
                >
                <input type="password" className="form-control" id="floatingPassword" />
                <label htmlFor="floatingPassword"><span className="text-dark fw-bolder">Password</span></label>
                </div>
                </div>
             </div>
             <div className="d-grid d-md-flex justify-content-center mt-5">
             <button class="btn btn-secondary btnContact" type="button">Submit</button>
             </div>
            </div>
        </div>
    )
}

export default Contact