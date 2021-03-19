import React from 'react'
import {client} from '../utils/shopify'
import Head from 'next/head'
import Products_Slider from '../components/Products_Slider'
import Link from 'next/link'
import {FaAlignRight, FaSistrix } from 'react-icons/fa';
import Fuse from 'fuse.js';

import Slider from '../components/Slider';
import { FaLongArrowAltRight } from 'react-icons/fa';


export const getStaticProps = async()=>{

    const newColl = await client.collection.fetchAllWithProducts()
   
    const newPants= await client.collection.fetchWithProducts("Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2MTQ5NjE0NDA4MQ==")
  
    return {
      props: {
        pants: JSON.parse(JSON.stringify(newPants)),
        myColl: JSON.parse(JSON.stringify(newColl)),
       },
    }
  }

function dress ({pants, myColl}) {



  

   
    return (
      
        <div className="mt-50">
           <h1>Helllo World</h1>

           <div className="overflow-hidden g-1 w-100">

<div className="row ">

{pants.products.map(product=>(

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

</div>
</div>

<style jsx>{`



.product__container{
display:flex;
flex-direction:column;
background-color:white;

}



.header__search{
display:flex;
align-items:center;

border:none;
height:30px;
margin-top:10px;


}

.header__search__logo{
height:28px;
color:white;
background:green;
border-radius:20 px;

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

export default dress
