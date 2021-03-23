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
                
                {id:11},
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
            {id:12},
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
                {id:13},
                { image:'/bckground.jpg'},
                {Caption:"top"}


        ]
        },

        {
            id:4,
            image:'/bckground.jpg',
            caption:"Surface Deals",
            title: "lorem lorem lorem lorem lorem lorem lorem lorem",
            dataImage:[
                {id:14},
                { image:'/bckground.jpg'},
                {Caption:"top"}


            ]
        }
        

    ]
 
    
    const [newData, SetnewData] = useState(data)

    return (
        
        <div className =" container-main">
        <div className="swiper__container">
            <Swiper
                    spaceBetween={100}
                 
                    slidesPerView={1}
                    navigation 
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
            >
                    { newData.map(user=>(

                    <SwiperSlide key={user.id}>
                   <div className="">
                   <div className="card bg-dark text-white" >
                        <img className="img-fluid"src={user.image}/>

                        <div className="card-img-overlay ">
                            <h5 className="card-title">{user.caption}</h5>
                            <h6 className="card-text ">{user.title}</h6>
                          
                        </div>
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

               
                }
              
                `}

            </style>

        </div>
    )
}

export default Slider
