import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper';
import SwiperCore from "swiper"
import 'swiper/swiper-bundle.css';
function ProductCom(props) {
    console.log(props.img)

  
    // console.log(image)
    return (
        <div>
           
            <Swiper
                    spaceBetween={100}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                {props.img && props.img.map(i=>(
                    <SwiperSlide >
                        <div className="card">
                         <img class="card-img-top"  src={i}  />
                         </div>
                
                  </SwiperSlide>
                   ))}
              
                </Swiper>
               
 
        </div>
    )
}

export default ProductCom
