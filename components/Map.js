import React from 'react'

function Map() {
    return (
        <div className="container card">
        <h4 className="card-title text-center fw-bold p-2 ">Map</h4>
        <div className="col-sm-12">
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
    )
}

export default Map
