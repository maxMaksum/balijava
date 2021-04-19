import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper';
import SwiperCore from "swiper"
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay ]);

   
const newdata = [
        {id:1,
        image:'/l4.jpg',  
        title: "lorem lorem lorem lorem",
        
        },

        {
            id:2,
            image:'/l5.jpg',
            title: "lorem lorem lorem lorem",
        },

        {
            id:3,
            image:'/l6.jpg',
            title: "lorem lorem lorem lorem",
      
        }
        

    ]

function SliderDetail() {
    return (
        <div>
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

                               <div className="card bg-dark text-white">
                                    <img src={user.image} style={{height:"250px"}} className="card-img" alt="..."/>
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text">Last updated 3 mins ago</p>
                                    </div>
                                </div>

                    </SwiperSlide>
                    ))}
            
                </Swiper>
        </div>
    )
}

export default SliderDetail

