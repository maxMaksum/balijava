import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper';
import SwiperCore from "swiper"
import 'swiper/swiper-bundle.css';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay ]); 
function Products_Slider({variants}) {

    console.log(variants)
    
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
                {variants.map(p=>(
                
                <SwiperSlide key={p.id} >
                    <div className="">
                        <div className="card__container">
                            <img className="img-fluid image__product"
                        
                            src={p.url} alt=""/>


                        </div>
                    </div>
                
                  </SwiperSlide>))}

        </Swiper>

        </div>
            <style jsx>
                {`
                .card__container{
                    height:200px,
                }
                .image__product{
                    width: 100%;
                    height: 200px;
                    object-fit: contain;
                }

                `
                }

            </style>
            
        
        </div>
    )
}

export default Products_Slider
