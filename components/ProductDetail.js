import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper';
import SwiperCore from "swiper"
import 'swiper/swiper-bundle.css';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay ]); 


function ProductDetail(props) {
    return (
        <div className="container">
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
                        <div className="card">
                        <img className="card-img-top"
                        src={p.src} alt=""/>
                         </div>
                     </div>
                
                  </SwiperSlide>))}

        </Swiper>
            

            
        </div>
    )
}

export default ProductDetail
