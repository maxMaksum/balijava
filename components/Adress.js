import React from 'react'
import {FaEnvelope,FaWhatsapp, FaPhoneAlt, FaFacebookF} from 'react-icons/fa';
import Link from 'next/link'


function Adress() {
  return (
    <div className="container mt-5">


      <div className="row g-4">
        <div className="col-sm-12  col-md-6 d-block ">

          <div classname="card">
            <div className=" card container bg-dark my-4">


            <h3 className="card-title card-title text-white text-center fw-bold ">Contact Us</h3>

            <div className="card-text p-2">
              <Link href="https://wa.me/6281246951065">
                <a className="text-white fa-5x  mx-1 px-1 d-block">
                  <FaWhatsapp size={20} />
                  <span>  WhatsApp </span>
                 
                </a>
              </Link>

              <Link href="#">
                <a className="text-white m-2 px-1 d-block">
                  <FaFacebookF size={20} />
                  <span> Facebook </span>
                </a>
              </Link>

              <Link href="#">
                <a className="text-white m-2 px-1 d-block">
                  <FaEnvelope size={20} />
                  <span> atbalijava@gmail.com </span>
                </a>
              </Link>

              <Link href="#">
                <a className="text-white m-2 px-1 d-block">
                  <FaPhoneAlt size={20} />
                  <span> +62 812 469 510 65 </span>
                </a>
              </Link>
            </div>
            </div>
          </div>

          <div className="card container">
            <h3 className="card-title text-center fw-bold"> Adress</h3>

            <p className="card-text">
              CV. At BaliJava Casa Busana Jl. Kyai Sholeh, Kramat Agung,
              Kaligung, Kec. Rogojampi, Kabupaten Banyuwangi, Jawa Timur 68462
            </p>
          </div>

        </div>

        <div className="col-sm-12 col-md-6">
          <iframe
            className="card"
            src="https://maps.google.com/maps?q=CV.%20At%20BaliJava%20Casa%20Busana&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
      </div>
    </div>
  );
}

export default Adress
