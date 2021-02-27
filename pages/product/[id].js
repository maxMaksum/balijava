import React from 'react'

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


export const getStaticPath = async () =>{
const path = Product.map(p=>{
    return{
        params:{
            id:p.id.toString()}
    }
})
return {
    path,
    fallback:false
}

}

// export const getStaticProps = async(context) =>{
//      id: context.params.id;
     
// }


function Details() {
    return (
        <div className="container">
            <h1>Details Page</h1>
            <div className="col">
            <div class="card">
                <h1 className="btn btn-primary">

                   Sukses Max
                </h1>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            </div>


            
        </div>
    )
}

export default Details
