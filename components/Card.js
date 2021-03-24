import React from 'react'

function Card(props) {
    return (
      <div>
        <div className="card container m-2 p-2 ">
        <h4 className="card-title text-center"> {props.title}</h4>
          <img src="./boy.jpg" className="card-img" alt="..." />
          <div className="card-body">
            
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>

            
            <p className="card-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur rerum corporis magni neque vel itaque, non voluptas eaque nam dolores.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non in eum totam? Accusamus quo odit reprehenderit tempora in sunt adipisci voluptatum ducimus reiciendis quod corrupti dolores, at voluptatem quae sapiente veniam molestias. Alias nobis porro non! Illo, nemo optio ducimus velit cum ad atque qui impedit ratione vero voluptatem libero.
            </p>
          </div>
        </div>
        <style jsx>{`
          .card-img{
            height:300px;
            width:100%;
            object-fit:contain
          }
          `}</style>

      </div>
    );
}

export default Card
