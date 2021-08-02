import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroImage from '../assests/Hero.jpg'
import './css/landingPage.css'
import Typography from '@material-ui/core/Typography'
import history from './history';



const Landingpage = (props) => {

const Register = () => {
  history.push('/login')
  props.setHideContentsAbout(true)
  props.setHideContentsFav(true)
  props.setHideContentsReviews(true)
  props.setHideContentsContact(true)
}

    return (
        <header>
            <div className="AppHeader" style={{"--img":'url('+HeroImage+')' }}>
              {/*Photo by Efrain Alonso from Pexels */}
            </div>
            <div className="App-content">
                <Typography>
                <h1 className="display-1">Travel Agency </h1>
                 <p className="lead display-6">Your Next Destination is Just a Click away</p>
                </Typography>
              <button type="submit" className="btn btn-secondary btnSubmit"
            >Search Destinations
            </button>
            <button type="submit" className="btn btn-secondary m-3 btnSubmit" onClick={Register}>Register | Login
            </button>
            </div>
            </header>
        
        );
    
}

export default Landingpage;