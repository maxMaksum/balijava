import React from 'react'
import {FaEnvelope,FaWhatsapp, FaPhoneAlt, FaFacebookF} from 'react-icons/fa';
import Link from 'next/link'
function SocialMedia() {
    return (
        <div className="container mb-4" style={{height:"120px"}}>

          <div className=" bg-light h-100 rounded">
            
            <div className="text-dark text-center pt-2">CONTACT US</div>


            <div className="d-flex justify-content-around align-items-center w-100 mt-4   ">

              <div className="">
              <Link href="https://wa.me/6281246951065">
                <a className="d-flex  justify-content-around align-items-center">
                  <FaWhatsapp size={20} />
                  <span className="pl-4">  WhatsApp </span>
                 
                </a>
              </Link>

              <Link href="#">
                <a className="d-flex  justify-content-around align-items-center">
                  <FaFacebookF size={20} />
                  <span className="pl-4"> Facebook </span>
                </a>
              </Link>
              </div>
            
            <div>
            <Link href="#">
                <a className="d-flex  justify-content-around align-items-center">
                  <FaEnvelope size={20} />
                  <span className="pl-4"> atbalijava@gmail.com </span>
                </a>
              </Link>

              <Link href="#">
                <a >
                  <FaPhoneAlt size={20} />
                  <span className="pl-4">+62 812 469 510 65 </span>
                </a>
            </Link>

              
            </div>

            </div>
            </div>
          </div>

    )
}

export default SocialMedia
