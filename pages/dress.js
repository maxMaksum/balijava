import React from 'react'
import {client} from '../utils/shopify'

import Products_Slider from '../components/Products_Slider'
import Link from 'next/link'

export const getStaticProps = async()=>{

    const newDress= await client.collection.fetchWithProducts("Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2MTQ5NjE0NDA4MQ==")
  
    return {
      props: {
        dress: JSON.parse(JSON.stringify(newDress)),
     
       },
    }
  }

function dress ({dress}) {
    return (
      <div className="mt-60">
        <h1>Helllo World</h1>

        <div className="overflow-hidden g-1 w-100">
          <div className="row">
            {dress.products.map((product) => (
              <Link href={`/product/${product.id}`}>
                <div
                  key={product.id}
                  className="col col-sm-6  col-md-6 col-lg-4 product__container"
                >
                  
                    <div className="p-2 card__container card m-2">
                      <Products_Slider productImage={product.images} />

                      <div className="product__info py-1 text-center card-body ">
                        <p className="product__title card-title">
                          {" "}
                          {product.title}
                        </p>

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

        <style jsx>
          {`
            .card__container {
              height: 300px;
              width: 100%;
            }
          `}
        </style>
      </div>
    );
}

export default dress

