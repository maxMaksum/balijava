
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
    
    return (
        <div className="container-main">
        <div className="container pt-2">
            <div className="row mx-auto">
                <div className="col  col-md-6">
                    <ProductDetail productImage={product.images}/>
                </div>

                <div class="col col-md-6">
                    <div className="card-body">
                        <p className="card-title"> {product.title}.</p>
                        <div className="product__price card-text">
                        <small>IDR</small>
                            <strong> {product.variants[0].price}</strong>

                        </div>

                        <div className="card-text">
                            <p>{product.description}</p>
                        </div>
                    </div>  
                </div> 
            </div>
            
            </div>
        </div>
    )
}



export default Details
