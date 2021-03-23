import React, {useState} from 'react';
import {client} from '../utils/shopify'
import Head from 'next/head'
import Products_Slider from '../components/Products_Slider'
import Link from 'next/link'
import {FaSistrix } from 'react-icons/fa';
import Fuse from 'fuse.js';

import Slider from '../components/Slider';


export const getStaticProps = async()=>{
   
  const products =  await client.product.fetchAll()

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
     },
  }
}


export default function Home (props) {
const [query, setQuery] = useState('')
const Psearch = props.products

const fuse = new Fuse(Psearch, { 
  keys: ["title"]    
});  


const results = fuse.search(query);
const ProductResults = query ? results.map(result=>result.item): Psearch


function handleOnSearch({ currentTarget }){
  const {value} = currentTarget
  setQuery(value)
}

  return (
    <div className="container-main">
        <Head>

        </Head>
       <div className="">
          <Slider/>
       </div>

     
            <div className="header__search d-flex justify-content-center  container mx-auto py-20">
                  <input
                      className ="header__searchInput w-75 border border-light"
                      type="text"
                      value={query}
                      onChange={handleOnSearch}
                      />
                  <div className="header__search__logo px-2">
                      <FaSistrix/>
                  </div>
            </div>

       <div className="row ">
     
      {ProductResults.map(product=>(
       
       <Link href={`/product/${product.id}`}>
       <div key={product.id} className="col col-sm-6  col-md-6 col-lg-4 ">
       
          
        <div className="p-2 m-2 card__container card">
             <Products_Slider productImage={product.images} />
       
           <div className="product__info py-1 text-center card-body ">
             
           <p className="product__title card-title"> {product.title}</p>
       
             <div className="product__price card-text">
                   <small>IDR</small>
                   <strong> {product.variants[0].price}</strong>
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
