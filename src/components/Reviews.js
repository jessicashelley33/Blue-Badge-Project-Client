import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/review.css'

const Review = () => {
    return(
        <main className="bgBlue">
        <div className="container">
            <h3 className="lead display-4 text-center mt-5">Customer Reviews</h3>
            <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col-sm-12 col-md-6 mt-5">
            <div className="card">
            <div className="card-header textLight lead">
                Amazing Time
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0 textLigh">
                <p className="textLight">Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua</p>
                <footer className="blockquote-footer textLight mt-2">Jane Doe <cite title="Source Title"></cite></footer>
                </blockquote>
            </div>
            </div>
            </div>
            <div className="col-sm-12 col-md-6 mt-5">
            <div className="card">
            <div className="card-header textLight lead">
                Best Trip
            </div>
            <div className="card-body">
                <blockquote class="blockquote mb-0">
                <p className="textLight">Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua</p>
                <footer className="blockquote-footer textLight mt-2">Mary Smith <cite title="Source Title"></cite></footer>
                </blockquote>
            </div>
            </div>
            </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col-sm-12 col-md-6 mt-5">
            <div className="card">
            <div className="card-header textLight lead">
               Travel only here
            </div>
            <div className="card-body">
                <blockquote class="blockquote mb-0">
                <p className="textLight">Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua</p>
                <footer class="blockquote-footer textLight mt-2">Tyler Johnson <cite title="Source Title"></cite></footer>
                </blockquote>
            </div>
            </div>
            </div>
            <div className="col-sm-12 col-md-6 mt-5">
            <div className="card">
            <div className="card-header textLight lead">
                Excellent Time
            </div>
            <div class="card-body">
                <blockquote className="blockquote mb-0">
                <p className="textLight">Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.</p>
                <footer className="blockquote-footer textLight mt-2">Joe Smith<cite title="Source Title"></cite></footer>
                </blockquote>
            </div>
            </div>
            </div>
            </div>
            </div>
            </main>
         
    )
}

export default Review