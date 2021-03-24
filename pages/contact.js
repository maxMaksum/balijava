import React from 'react'
import Adress from '../components/Adress';
import Form from '../components/Form';
import Slider from '../components/SliderPage';


import SocialMedia from '../components/SocialMedia'
import Map from '../components/Map'

function contact() {
  
    
    return (
      <div className="container-main">
        <Slider />

       
        <div className="row g-4 ">
          <div className="col-sm-12">
            {" "}
            <Form />
          </div>

          <div className="col-sm-12 col-md-6 my-2 footer__container">
            <SocialMedia className="h-100 m-2" />
          </div>
          <div className="col-sm-12 col-md-6 my-2 footer__container">
            <Adress className="h-100" />
          </div>

          <div className="col-sm-12">
            {" "}
            <Map />
          </div>
        </div>
      </div>
    );
}

export default contact
