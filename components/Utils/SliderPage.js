import React, {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper';
import SwiperCore from "swiper"
import 'swiper/swiper-bundle.css';
import {motion} from 'framer-motion'


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay ]);
function Slider() {
   
const newdata = [
        {id:11,
        image:'/bckground.jpg',  
        title: "lorem lorem lorem lorem",
        
        },
        {id:1,
        image:'/boy.jpg',  
        title: "lorem lorem lorem lorem",
        
        },

        {
            id:2,
            image:'/sunrise.jpg',
            title: "lorem lorem lorem lorem",
        },

        {
            id:3,
            image:'/Young.jpg',
            title: "lorem lorem lorem lorem",
      
        }
        

    ]

 

   
    return (
        
        <motion.div 
        initial={{ x: '-100vw'}}
        animate={{x:0}}
        transition={{delay:0.5}}
        className =" container-main">
     
            <Swiper
                    spaceBetween={100}
                 
                    slidesPerView={1}
                   
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
            >
                    { newdata.map(user=>(

                    <SwiperSlide key={user.id}>
        
                            <div className="image-container" style ={{height:'400px'}}>
                              <img className='card-image h-100 w-100' src={user.image}/> 
                              <div className="card-img-overlay">
                                        <h5 className="card-title text-white">{user.title}</h5>
                             </div> 
                            </div>
                              
                            
                          
                    
                    </SwiperSlide>
                    ))}

                   

                
                </Swiper>
             

            <style jsx>
                {`
    
             
                
              
                `}

            </style>

        </motion.div>
    )
}

export default Slider