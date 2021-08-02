import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/register.css'
import ContactImg from '../../assests/contactImg.jpg'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div>
            <div className="contactImg"
            style={{"--contactImg":'url('+ContactImg+')' }}
            >
                <div className="register">
                <h2 className="text-center text-white lead display-2 mb-5 ">Register Account</h2>
                <div className="row">
                <div className="col-sm-12 col-md-12">
                <div className="form-floating mb-4"
                style={{
                    width:'600px'}}>
                <input type="text" className="form-control" id="floatingInput"/>
                <label htmlFor="floatingInput"><span className="text-dark fw-bolder">First Name</span></label>
                </div>
                </div>
                </div>
            <div className="row">
                <div className="col-sm-12 col-md-12">
                <div className="form-floating mb-4"
                style={{
                    width:'600px'}}>
                <input type="text" className="form-control" id="floatingInput"/>
                <label htmlFor="floatingInput"><span className="text-dark fw-bolder">Last Name</span></label>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-12">
                <div className="form-floating mb-4"
                style={{
                    width:'600px'}}>
                <input type="text" className="form-control" id="floatingInput"/>
                <label htmlFor="floatingInput"><span className="text-dark fw-bolder">Addres</span></label>
                </div>
                </div>
            </div>
                <div className="row">
                <div className="col-sm-12 col-md-12">
                <div className="form-floating mb-4"
                style={{
                    width:'600px'
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
                    width:'600px'
                }}
                >
                <input type="password" className="form-control" id="floatingPassword" />
                <label htmlFor="floatingPassword"><span className="text-dark fw-bolder">Password</span></label>
                </div>
                </div>
             </div>
             <div className="d-grid d-md-flex justify-content-center mt-5">
             <button class="btn btn-secondary formBtnReg" type="button">Submit</button>
             </div>
             
            <div className="container mt-5">
                <ul className="smallText">
                    <li className="text-white m-2">
                    Already Have an Account?
                    </li>
                    <li className="text-white m-2"> <Link to='/login' className="text-white fw-bold smallText text-center">Login Here</Link></li>
                </ul>
            </div>
            
            </div>
                    </div>
            </div>

            
    )
}

export default Register