import React, {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper';
import SwiperCore from "swiper"
import 'swiper/swiper-bundle.css';
import { FaMaxcdn } from 'react-icons/fa';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay ]);
function Slider() {
   
const data = [
        {id:1,
        image:'/bckground.jpg',   
        caption:"Surface Deals",
        title: "lorem lorem lorem lorem",
        
        dataImage:[
                
                {id:2},
                { image:'/bckground.jpg'},
                {Caption:"top"}
            ]
        },

        {
            id:2,
            image:'/bckground.jpg',
            caption:"Surface Deals",
            title: "lorem lorem lorem lorem",
            dataImage:
            [
            {id:2},
            { image:'/bckground.jpg'},
            {Caption:"top"}
            ]
        },

        {
            id:3,
            image:'/bckground.jpg',
            caption:"Surface Deals",
            title: "lorem lorem lorem lorem",
            dataImage:[
                {id:2},
                { image:'/bckground.jpg'},
                {Caption:"top"}


        ]
        },

        {
            id:3,
            image:'/bckground.jpg',
            caption:"Surface Deals",
            title: "lorem lorem lorem lorem lorem lorem lorem lorem",
            dataImage:[
                {id:2},
                { image:'/bckground.jpg'},
                {Caption:"top"}


            ]
        }
        

    ]
 
    
    const [newData, SetnewData] = useState(data)

    return (
        
        <div className ="slider__main">
        <div class="swiper__container container">
            <Swiper
                    spaceBetween={100}
                    // autoplay= {{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                   
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
            >
                    { newData.map(user=>(

                    <SwiperSlide key={user.id}>
                   
                   <div class="card" >
                        <img src={user.image} class="card-img-top" />
                        <div class="card-img-overlay">
                            <h5 class="card-title text-light lead">{user.caption}</h5>
                            <h6 class="card-subtitle mb-2 text-light lead">{user.title}</h6>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                        </div>
                       
                  
                    </SwiperSlide>
                    ))}

                   

                
                </Swiper>
                </div>

            <style jsx>
                {`
                
                .swiper-main{
                    margin-bottom:50 px;
                        width:14rem;
                    }

              
                    
                `}

            </style>

        </div>
    )
}

export default Slider
