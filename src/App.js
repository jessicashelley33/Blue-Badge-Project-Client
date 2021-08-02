import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './components/Routes'
import About from './components/About'
import FavDestinations from './components/FavDestinations'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import React from 'react';


//mport Routes from './Routes'

function App() {

//let hideConents = false;
const [hideConentsAbout , setHideContentsAbout] = React.useState(false)
const [hideContentsFav , setHideContentsFav] = React.useState(false)
const [hideContentsReviews , setHideContentsReviews] = React.useState(false)
const [hideContentsContact , setHideContentsContact] = React.useState(false)

  return (
    
      <div className="App">
        
          <Routes setHideContentsAbout={setHideContentsAbout} setHideContentsFav={setHideContentsFav} setHideContentsReviews={setHideContentsReviews} setHideContentsContact={setHideContentsContact} />
       
         
       
       { hideConentsAbout ? null : <About /> }
       { hideContentsFav ? null : <FavDestinations /> } 
       { hideContentsReviews ? null : <Reviews /> } 
      { hideContentsContact ? null : <Contact /> } 
        
        
  </div>
  
      
  )

    }

export default App;
