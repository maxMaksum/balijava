import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper';
import SwiperCore from "swiper"
import 'swiper/swiper-bundle.css';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay ]); 
function Products_Slider(props) {
    
    return (
        <div>
            <div>
            <Swiper
            spaceBetween={100}
            slidesPerView={1}
          
            pagination={{ clickable: true }}
          
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {props.productImage.map(p=>(
                <SwiperSlide key={p.id} >
                    <div>
                      
                        <img className="card-image-top"
                      
                        src={p.src} alt=""/>
                    </div>
                   
                
                  </SwiperSlide>))}

        </Swiper>

        </div>
            <style jsx>
                {`
                
                img{
                    max-height:300px;
                    width:100%;
                    object-fit:contain;
                }
                `
                }

            </style>
            
        
        </div>
    )
}

export default Products_Slider
