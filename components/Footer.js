import React from 'react'
import Adress from './Adress'
import Form from './Form'
import { useRouter } from 'next/router'
import SocialMedia from './SocialMedia'
import Map from './Map'
function Footer() {
    const router = useRouter()
    console.log(router.pathname)
  
    return (
      
            <div  className="container footer__container">

            { router.pathname === "/contact"? null : 
            
            <div className="row g-4 ">

                <div className="col-sm-12"> <Form /> 
                </div>

                <div className="col-sm-12 col-md-6 my-2 "> 
                
                 <SocialMedia/> 
                
                 </div>
                <div className="col-sm-12 col-md-6 my-2 ">
                  <Adress /> 
                 </div>

                 <div className="col-sm-12"> <Map/> 
                </div>
               
            </div>
            }

            <style jsx>
                {`
                
                .footer__container{
                    
                    width:100%;
                    background-color:#097969;
                    border-radius:2px
                    }

               
                }
              
                `}

            </style>
          
            </div>     
     
    )
}

export default Footer
