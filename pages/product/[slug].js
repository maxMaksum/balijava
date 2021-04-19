
import React, {useState} from 'react';

import Head from 'next/head'
import {getProducts, getProduct, endpoint, productQuery} from '../../graphql/schema'
import Products_Slider from '../../components/Slider/Products_Slider';
import SliderDetail from '../../components/Slider/SliderDetail';
import Quote from '../../components/Card/Quote';


export async function getStaticPaths() {

  const data = await getProducts()
    return{
        fallback: false,
        paths: data.products.map((p)=>({params:{slug:p.slug}}))
    }
    }

export async function getStaticProps(context) {
   
        const ProductDetail = await getProduct(context.params.slug)
    
        return {
          props: {ProductDetail} // will be passed to the page component as props
        }
    }
  


function productDetail({ProductDetail}) {
  
console.log(ProductDetail)
const {image,price, slug, title, description} =ProductDetail.product


console.log(image)
    return (
        <div className="container-main">
            <SliderDetail/>
            <Quote/>
            <div className="container shadow p-3 mb-5 bg-body rounded">
               <Products_Slider variants = {image}/>
                <div className ="container">
                    <div className="text-bold"> Name: {title} </div> 
                    <span> Price : USD {price}</span>
                    <div className="mt-2"> {description.text}</div>
                </div>
            </div>
        
        </div>
    )
}

export default productDetail
