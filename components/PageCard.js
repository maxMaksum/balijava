import React from 'react'

function Card(props) {
    return (
      <div>
        <div className="card container m-2 p-2 ">
        <h4 className="card-title text-center"> {props.title}</h4>
          <img src="./boy.jpg" className="card-img" alt="..." />
          <div className="card-block">
            
            <p className="card-text">
            
            </p>

            
            <p className="card-text">
           
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
