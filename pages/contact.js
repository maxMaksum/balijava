import React from 'react'
import Adress from '../components/Utils/Adress';
import Form from '../components/Utils/Form';
import SocialMedia from '../components/Utils/SocialMedia'
import Map from '../components/Utils/Map'

import SliderPage from '../components/utils/sliderPage'

function contact() {

    
    return (
      <div className="container-main text-light" style={{backgroundColor:"#097969"}}>

        <div  style={{height:"500px", position:"relative", width:"100%"}}>
        <SliderPage />
        </div>
       

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
