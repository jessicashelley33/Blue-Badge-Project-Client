import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css'
import LoginImg from '../../assests/contactImgTwo.jpg'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="wrapper">
            <div className="contactImgTwo"
            style={{"--contactImgTwo":'url('+LoginImg+')' }}>
            <div className="login">
                <h2 className="text-center text-white lead display-2 mb-5 ">Login</h2>
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
             <button class="btn btn-secondary formBtn" type="button">Submit</button>
             </div>
             
            <div className="container mt-5">
                <ul className="smallText">
                    <li className="text-white m-2">
                    Create an Account?
                    </li>
                    <li className="text-white m-2"> <Link to='/register' className="text-white fw-bold smallText text-center">Register Here</Link></li>
                </ul>
            </div>
            
            </div>
            </div>
            </div>
        
            
    )
}

export default Login