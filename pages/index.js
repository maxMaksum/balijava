import React from 'react';
import {client} from '../utils/shopify'
import Head from 'next/head'
import Products_Slider from '../components/Products_Slider'
import Link from 'next/link'

import Slider from '../components/Slider';
import { FaLongArrowAltRight } from 'react-icons/fa';

export const getStaticProps = async()=>{
   
  const products =  await client.product.fetchAll()

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
     },
  }
}


export default function Home( props) {

  console.log(props.products)
  return (
    <div className="container-main">
        <Head>

        </Head>
       <div className="myZindex">
          <Slider/>
       </div>

      <div className="overflow-hidden g-1 ">
       <div className="row">

      {props.products.map(product=>(
       
        <div key={product.id} className="col col-sm-6  col-md-6 col-lg-4 product__container">
            
            <div className="border border-primary my-2">

            <div className="p-2">
                 <Products_Slider productImage={product.images}/>
              </div>
            </div>
            <div className="product__info py-1 text-center card-body ">
              <Link href={`/product/${product.id}`}><p className="product__title "> {product.title}</p></Link>
            
                <div className="product__price">
                      <small>IDR</small>
                      <strong> {product.variants[0].price}</strong>
                 </div>

            </div>




        </div>

      ))}


            {/* {products.map(p=>(
          <div key = {p.id}className="col col-sm-6  col-md-6 col-lg-4 product__container">

            <div className="border border-primary my-2">
              <div className="p-2">
                                <Products_Slider productImage={p.product_images}/>
              </div>
              <div className="product__info py-1 text-center card-body ">
                 <p className="product__title "> {p.name}</p>
                <div className="product__price"> 
                     <small>$</small>
                      <strong> {p.price}</strong>
                 </div>
                  < Link href={"/product/" + p.id}>
                     <a className="product_button text-white btn btn-sm btn-success ">Learn More</a>
                  </Link> 
                        
              </div>          
          </div>
          </div>
            ))} */}
      </div>
      </div>
      
<style jsx>{`

  .product__container{
    display:flex;
    flex-direction:column;
    background-color:white;

  }


  .product__info{
    height:100px;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
  }


}
  .card-image{
    height:200px;
    width:100%

  }

  img{
    object-fit:contain;
    height:150px;
    width:100%
  }
  `
  
  }


</style>
      
</div>
  )
}
