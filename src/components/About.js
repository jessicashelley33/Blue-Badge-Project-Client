import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutImgOne from '../assests/AboutImgOne.jpg'
import AboutImgTwo from '../assests/AboutImgTwo.jpg'
import './css/about.css'
import { Typography } from "@material-ui/core";


const About = () => {
    return (
        <div className="mt-0 AboutStyle" id="about">
        <Typography
        align="center">
        <h2 className="lead display-5">About Us</h2>
        </Typography>
      
        <div className="container">
            <div className="row mt-5">
                <div className="col-sm-12 col-md-6 mb-1">
                <img
                className="aboutImg img-fluid rounded"
                src={AboutImgTwo}
                alt="Rocks by the Seaside" />
                </div>
                <div className="col-sm-12 col-md-6 mt-1">
                <p className="lead paraStyle" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis tempor odio, quis accumsan libero maximus in. Quisque ut hendrerit sem. Maecenas posuere massa vel tortor laoreet mollis eget vitae nulla. Donec a justo nec quam viverra venenatis. Pellentesque blandit lacus at ante porttitor, ac molestie lorem feugiat. Suspendisse ac mauris leo. In mollis nibh nibh, nec varius ipsum tristique eu. Ut mattis purus vel tortor rutrum, eu tincidunt felis dictum.</p>
                </div>
                </div>
                <div className="row mt-5">
                <div className="col-sm-12 col-md-6 mt-1">
                <p className="lead" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis tempor odio, quis accumsan libero maximus in. Quisque ut hendrerit sem. Maecenas posuere massa vel tortor laoreet mollis eget vitae nulla. Donec a justo nec quam viverra venenatis. Pellentesque blandit lacus at ante porttitor, ac molestie lorem feugiat. Suspendisse ac mauris leo. In mollis nibh nibh, nec varius ipsum tristique eu. Ut mattis purus vel tortor rutrum, eu tincidunt felis dictum.</p>
                </div>
                <div className="col-sm-12 col-md-6 mb-1">
                <img
                className="aboutImg img-fluid rounded"
                src={AboutImgOne}
                alt="Rocks by the Seaside" />
                </div>
                </div>
            </div>
            
     </div>
    )
}
  


export default About;