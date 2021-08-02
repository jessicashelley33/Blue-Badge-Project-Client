import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/favdestinations.css"
import ImgOne from '../assests/Img-1.jpg'
import ImgTwo from '../assests/Img-2.jpg'
import ImgThree from '../assests/Img-3.jpg'
import ImgFour from '../assests/Img-4.jpg'
import ImgFive from '../assests/Img-5.jpg'
import ImgSix from '../assests/Img-6.jpg'

const FavDestinations = () => {
    return(
        <div className="bgLight">
            <h4 className="text-center lead ">Favorite Spot This Month</h4>
            <h3 className="text-center lead display-4">Thailand</h3>
                 <div className="container">
            <div className="row mt-5">
                <div className="col-sm-12 col-md-4 mt-5">
                <img className="img-fluid rounded" src={ImgOne} alt="" />
                </div>
                <div className="col-sm-12 col-md-4 mt-5">
                <img className="img-fluid rounded" src={ImgTwo} alt="" />
                </div>
                <div className="col-sm-12 col-md-4 mt-5">
                <img className="img-fluid rounded" src={ImgThree} alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-4">
                <img className="img-fluid rounded mt-5" src={ImgFour} alt="" />
                </div>
                <div className="col-sm-12 col-md-4">
                <img className="img-fluid rounded mt-5" src={ImgFive} alt="" />
                </div>
                <div className="col-sm-12 col-md-4">
                <img className="img-fluid rounded mt-5" src={ImgSix} alt="" />
                </div>
            </div>
            </div>

        </div>
    )
}

export default FavDestinations