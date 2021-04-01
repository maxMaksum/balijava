import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper';
import SwiperCore from "swiper"
import 'swiper/swiper-bundle.css';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay ]); 


function ProductDetail({image}) {
    console.log(image)
    return (
        <div className="container">
            <Swiper
            spaceBetween={100}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {image.map(p=>(
                
                <SwiperSlide key={p.id} >
                    <div className="card">
                        <div className="card__container">
                        <img className="image__product img-fluid"
                        src= {p.url} alt=""/>
                         </div>
                     </div>
                
                  </SwiperSlide>))}

        </Swiper>
            
        <style jsx>
                {`
                .card__container{
                    height:300px,
                }
                .image__product{
                    width: 100%;
                    height: 300px;
                    object-fit: contain;
                }

                @media only screen and (min-width: 600px) {
                    .image__product{
                    width: 100%;
                    height: 400px;
                    object-fit: contain;
                }
                }

                `
                }

            </style>
            
                        
        </div>
    )
}

export default ProductDetail
