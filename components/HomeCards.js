import React,{useState, useEffect} from 'react'


const data = [
    {   id:1,
        image:['/bckground.jpg', '/bckground.jpg', '/bckground.jpg','/bckground.jpg' ],  
        caption:"Surface Deals",
        title: "lorem lorem lorem lorem",
        type:['a', 'b', 'c', 'd']
        
    },

     {
            id:2,
            image:['/bckground.jpg', '/bckground.jpg', '/bckground.jpg','/bckground.jpg' ],
            caption:"Surface Deals",
            title: "lorem lorem lorem lorem",
           
     },

        {
            id:3,
            image:['/bckground.jpg', '/bckground.jpg', '/bckground.jpg','/bckground.jpg' ],
            caption:"Surface Deals",
            title: "lorem lorem lorem lorem",
            
        },

        {
            id:3,
            image:['/bckground.jpg', '/bckground.jpg', '/bckground.jpg','/bckground.jpg' ],
            caption:"Surface Deals",
            title: "lorem lorem lorem lorem lorem lorem lorem lorem",
            image:['/bckground.jpg', '/bckground.jpg', '/bckground.jpg','/bckground.jpg' ],
        }
        

    ] 



function HomeCards() {
    const [data2, Setdata2] = useState(data)
  
    return (
        <div class="container bg-success.bg-gradient">


            <div class="row mx-auto">
                        {data2.map(user=> (
                    <div className=" col-6 col-sm-4 p-1 sm-mx-2 bg-success.bg-gradient"  key={user.id}>
                        <div className="card"> 
                        <img class="card-img-top" src={user.image[0]} alt="Card image cap"/>
                                <div class="card-body">
                                        <h5 class="card-title">{user.title}</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>

                                </div> 
                                <div> 
                                    
                                </div>
                        </div>
                        </div>

                        ))}

                </div>
            <style jsx>{`
                
                .card__img {
                    height:300px;
                    object-fit:contain;
                    object-position:center

                }
                `
                }

            </style>
        </div>


            
    )
}

export default HomeCards
