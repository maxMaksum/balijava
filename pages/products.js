import React, {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper';
import SwiperCore from "swiper"
import 'swiper/swiper-bundle.css';
import { FaMaxcdn } from 'react-icons/fa';
import ProductCom from '../components/ProductCom'
import Link from 'next/link'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay ]);

const Product = [
    {   id:1,
        image:['/bckground.jpg', '/bckground.jpg', '/bckground.jpg','/bckground.jpg' ],  
        caption:"Surface Deals",
        title: "At Bali Java",
        type:['a', 'b', 'c', 'd']
        
    },

     {
            id:2,
            image:['/bckground.jpg', '/bckground.jpg', '/bckground.jpg','/bckground.jpg' ],
            caption:"Surface Deals",
            title: "At Bali Java",
           
     },

        {
            id:3,
            image:['/bckground.jpg', '/bckground.jpg', '/bckground.jpg','/bckground.jpg' ],
            caption:"Surface Deals",
            title: "At Bali Java",
            
        },

        {
            id:4,
            image:['/bckground.jpg', '/bckground.jpg', '/bckground.jpg','/bckground.jpg' ],
            caption:"Surface Deals",
            title: "At Bali Java",
           
        }
        

    ] 



function products() {
    return (
        <div className="container" >
            
            <h2>Hallo World</h2>

            <div className="row">
                {Product.map(p=>(
                    
                <div  className="col-12 col-sm-6 col-md-4" >
                   
                        <div> {p.title}</div>
                        
                        <div className="card"> 
                            <ProductCom img={p.image}/>
                        </div>
                        <Link href={"/product/" + p.id}>
                            <a className="btn btn-success">{p.caption}</a>
                        </Link>
                </div>
                
                ))}

            </div>
   
        </div>
  
    )
}

export default products
