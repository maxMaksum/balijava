import React from 'react';

import Head from 'next/head'

import MyNavbar from '../components/MyNavbar';
import Slider from '../components/Slider';
import HomeCards from '../components/HomeCards';
import sliderCom from '../components/ProductCom';



export default function Home() {
  return (
    <div className="container-main">
        <Head>

        </Head>
    
      
       <div class="myZindex">
          <Slider/>
       </div>
       <HomeCards/>

      
    </div>
  )
}
