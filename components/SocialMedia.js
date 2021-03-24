import React from 'react'
import {FaEnvelope,FaWhatsapp, FaPhoneAlt, FaFacebookF} from 'react-icons/fa';
import Link from 'next/link'
function SocialMedia() {
    return (
        <div className="container card">

            <h4 className="card-title text-center fw-bold p-2 ">Contact Us</h4>

            <div className="card-text p-2 ">
              <Link href="https://wa.me/6281246951065">
                <a className="text fa-5x  mx-1 px-1 d-block">
                  <FaWhatsapp size={20} />
                  <span>  WhatsApp </span>
                 
                </a>
              </Link>

              <Link href="#">
                <a className="text m-2 px-1 d-block">
                  <FaFacebookF size={20} />
                  <span> Facebook </span>
                </a>
              </Link>

              <Link href="#">
                <a className="text m-2 px-1 d-block">
                  <FaEnvelope size={20} />
                  <span> atbalijava@gmail.com </span>
                </a>
              </Link>

              <Link href="#">
                <a className="text m-2 px-1 d-block">
                  <FaPhoneAlt size={20} />
                  <span> +62 812 469 510 65 </span>
                </a>
              </Link>
            </div>
          </div>

    )
}

export default SocialMedia
