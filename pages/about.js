import React from 'react'
import Card from '../components/Card'
import Slider from '../components/SliderPage'

function about() {
    return (
      <div className="container-main">
        <Slider />
        {/* <div className="card">
          <div className="card bg-dark text-white">
            <img src="/Young.jpg" className="img-fluid" alt="..." />
            <div className="card-img-overlay ">
              <h5 className="card-title">About Us</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural.
              </p>
              <p className="card-text">Last updated 3 mins ago</p>
            </div>
          </div>
        </div> */}

        <h3 className="card-title card-title text-dark text-center fw-bold pt-4 ">
          About Us
        </h3>
        <p className="container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          accusamus fugit vitae ratione, impedit, officia nisi beatae provident
          voluptatem ipsam fugiat, laudantium libero tenetur minima amet maxime
          odio praesentium recusandae exercitationem. Repudiandae sequi
          doloremque velit totam pariatur? Quas quasi distinctio modi eius quam
          sed aperiam nobis dolorem quos perferendis ex temporibus eum
          blanditiis, aliquam debitis! Nesciunt iusto amet dolores repellat ut a
          officia deleniti ipsum aliquid at, eum soluta accusamus temporibus
          iste minima dolorum sequi ipsam debitis praesentium nam eaque card
          asperiores consectetur consequatur suscipit? Suscipit nulla, eumhh jjjj
          impedit voluptate commodi excepturi eligendi laborum quidem
          repellendus minus esse dolorum fugit nesciunt.
        </p>

          <Card 
          title = "History"
          />

          <Card 
          title = "Vission and Mission"
          />

          <Card 
          title = "Our Team"
          />
       

       
      </div>
    );
}

export default about
