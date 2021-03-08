import Image from 'next/image'
import ProductDetail from '../../components/ProductDetail'
import {client} from '../../utils/shopify'

export const getStaticPaths = async () =>{

    const res =  await client.product.fetchAll()
    const products = await JSON.parse(JSON.stringify(res))
    const paths = products.map(product =>{
        return {
            params:{id:product.id.toString()}
        }
    })

    return {
       
        paths:paths,
        fallback:false
    }
}


export const getStaticProps = async(context)=>{
    const id = context.params.id
    const product =  await client.product.fetch(id)
  
    return {
      props: {
        product: JSON.parse(JSON.stringify(product)),
       },
    }
  }


function Details({product}) {

    console.log(product)

    const {NEXT_PUBLIC_API} = process.env
    return (
        <div className="container product__container mt-5">
            <div class="row mx-auto">
                <div className="col  col-md-8">
                    <ProductDetail productImage={product.images}/>
                </div>

                <div class="col col-md-4">
                    <p class="text-lead"> {product.title}.</p>
                    <div className="product__price">
                      <small>IDR</small>
                      <strong> {product.variants[0].price}</strong>

                    </div>

                    <div>
                        <p>{product.description}</p>
                    </div>
                    
                </div>

               
            </div>
            

            <style jsx>{`

                .product__row{
                    
               
                }
                
                .product__details__img{
                    width:500px;
                    height:400px;
                    object-fit:contain;
                    object-position:center;
                  
         
                }

              
                
                
                `
                
                
                }</style>

        </div>
    )
}



export default Details
