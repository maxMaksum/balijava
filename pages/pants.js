import React from 'react'
import {client} from '../utils/shopify'
import Products_Slider from '../components/Products_Slider'
import Link from 'next/link'


export const getStaticProps = async()=>{
   
    const newPants= await client.collection.fetchWithProducts("Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2MTQ5NjY2ODM2OQ==")
  
    return {
      props: {
        pants: JSON.parse(JSON.stringify(newPants)),
       },
    }
  }

function pants({pants}) {


    return (
      
        <div className="mt-60">
           <h1>Helllo World lalaln</h1>

           <div className="overflow-hidden g-1 w-100">

<div className="row ">

{pants.products.map(product=>(
<Link href={`/product/${product.id}`}>
<div key={product.id} className="col col-sm-6  col-md-6 col-lg-4 product__container">

  
     <div className="p-2 card__container card">
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
</div>

<style jsx>{`
.card__container {
height:300px;
width:100%;


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
height:150px;
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

.product__container{
    display:flex;
    flex-direction:column;
  }
`

}


</style>

</div>
 
    )
}

export default pants
