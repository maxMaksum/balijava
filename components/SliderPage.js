import React, {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper';
import SwiperCore from "swiper"
import 'swiper/swiper-bundle.css';



SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay ]);
function Slider() {
   
const data = [
        {id:1,
        image:'/fisherman.jpg',   
        caption:"Surface Deals",
        title: "lorem lorem lorem lorem",
        
        dataImage:[
                
                {id:11},
                { image:'/fisherman'},
                {Caption:"top"}
            ]
        },

        {
            id:2,
            image:'/sunrise.jpg',
            caption:"Surface Deals",
            title: "lorem lorem lorem lorem",

            dataImage:
            [
            {id:12},
            { image:'/Young.jpg'},
            {Caption:"top"}
            ]
        },

        {
            id:3,
            image:'/Young.jpg',
            caption:"Surface Deals",
            title: "lorem lorem lorem lorem",
            dataImage:[
                {id:13},
                { image:'/Young.jpg'},
                {Caption:"top"}


        ]
        },
        

    ]
 
    
    const [newData, SetnewData] = useState(data)

    return (
        
        <div className =" container-main">
        <div className="swiper__container">
            <Swiper
                    spaceBetween={100}
                 
                    slidesPerView={1}
                   
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
            >
                    { newData.map(user=>(

                    <SwiperSlide key={user.id}>
                   <div className="">
                   <div className="text-white card" >
                       <div className="img-container">
                       <img className="img-fluid image__size"src={user.image}/>

                       </div>
                       

                        <div className="card-img-overlay ">
                            <p className="card-title">{user.caption} </p>
                            <p className="card-text ">{user.title}</p>
                          
                        </div>
                        </div>
                       
                     </div>
                    </SwiperSlide>
                    ))}

                   

                
                </Swiper>
                </div>

            <style jsx>
                {`
                .card{
                    height: 250px;
                }

                .swiper-main{
                    margin-bottom:50 px;
                        width:14rem;
                      
                    }

                .img-container{
                    height:250px;
                }
                .image__size{
                    width: 100%;
                    height: 100%;
                    object-fit:fill;


                }
                
              
                `}

            </style>

        </div>
    )
}

export default Slider