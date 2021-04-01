import React, {useState} from 'react';
// import {client} from '../utils/shopify'
import Head from 'next/head'
import Products_Slider from '../components/Products_Slider'
import Link from 'next/link'
import {FaSistrix } from 'react-icons/fa';
import Fuse from 'fuse.js';
import { gql } from "@apollo/client";
import client from "../apollo-client";
import Slider from '../components/Slider';



export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
    query productsQuary {
      products (first:25){
        id
        title
        slug
        description{
          text
        }
        image {
          url
           width
          height
        }
      }

     
    }
    `,
  });

return {
    props: {
      products: data.products,
    },
 };
}

export default function Home ({products}) {
console.log(products)



  return (
    <div className="container-main">
        <Head>

        </Head>
       <div className="">
          <Slider/>
       </div>

    

       <div className="row ">
    
      {products.map(product=>(
       
       <Link href={`/product/${product.id}`}>
       <div key={product.id} className="col col-sm-6  col-md-6 col-lg-4 ">
       
          
        <div className="p-2 m-2 card__container card">
             <Products_Slider variants={product.image} />
            {console.log(product.image[1].url)}
           <div className="product__info py-1 text-center card-body ">
             
           <p className="product__title card-title"> {product.title}</p>
       
             <div className="product__price card-text">
                   <small>IDR</small>
                   <strong> {product.price}</strong>
             </div>
        </div>
       
       
       </div>
       
       </div>
       </Link>

      ))} 

      </div>
     
      
<style jsx>{`

  .header__search{
    display:flex;
    align-items:center;
   
    border:none;
    height:30px;
    margin-top:10px;
  
       
    }

  .header__search__logo{
    height:28px;
    color:black;
   
    border-radius:20px;
      
  }
           
  .product__info{
    height:150px;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
  }


 
  `
  
  }


</style>
      
</div>
  )
}
