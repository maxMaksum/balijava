import React, {useState} from 'react';
import Link from 'next/link'
import Head from 'next/head'
import { request} from 'graphql-request'
import {useQuery} from "react-query"
import {getProducts, endpoint, productsQuery} from '../graphql/schema'

import Fuse from 'fuse.js';
import Products_Slider from '../components/Slider/Products_Slider';
import SliderDetail from '../components/Slider/SliderDetail';
import Quote from '../components/Card/Quote';

export async function getStaticProps(context) {
 
 
  const newproducts = await getProducts()

  return {
    props: { newproducts} // will be passed to the page component as props
  }
}
export default function Home ( {newproducts}) {

  const [query, setQuery] = useState('')
  const productsFn = async() =>{
    return request (endpoint, productsQuery)
  }
  const {data} = useQuery('pages', productsFn, {initialData:newproducts}
  )
  
  console.log(data, "yeye")

  const Psearch = data.products

  console.log(Psearch, "test")
  const fuse = new Fuse(Psearch, { 
      keys: ["title"]    
    });  

const results = fuse.search("dress");
const ProductResults = query ? results.map(result=>result.item): Psearch



console.log(results)


  return (
    <div className="container-main">

        <Head>

        </Head>
        <SliderDetail/>
        <Quote/>
        <h5 className="text-center container border border-light card-title  text-dark py-2">Products</h5>
      
       <div className="row ">
    
           {Psearch && Psearch.map((product)=>(
            
                    <Link href={`/product/${product.slug}`}  key={product.id}key={product.id}>
            
                      <div className="col-12 col-sm-6 col-md-4">
                       
                        <div className="container shadow p-3 mb-5 bg-body rounded ">
                        <Products_Slider variants={product.image}/>
                        <div className ="container ">
                        <div className="text-bold"> Name: {product.title} </div> 
                        <span> Price : USD {product.price}</span>
                        </div>
                        </div>
                        
                      </div>
                     </Link>
            ))}

      </div>
     
 
</div>
  )
}
