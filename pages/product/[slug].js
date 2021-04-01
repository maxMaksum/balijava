
import React from 'react'
import { useQuery, gql } from '@apollo/client';
import client from "../../apollo-client";
import Link from 'next/link'
import ProductDetail from "../../components/ProductDetail"


export const getStaticPaths = async () =>{
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
    const paths = data.products.map(product =>{
        return {
            params:{slug: product.slug.toString()}
            
        }
    })

    console.log(paths)

    return {
       
      paths:paths,
      fallback:false
  }
}


 export const getStaticProps = async(context)=>{
        console.log(context)


        const slug = context.params.slug
        
        const { data } = await client.query({
          query: gql`
          query productsQuary ($slug: String) {
            products(where:{
              slug:$slug
            }
            ) {
              id
              title
              
              image {
                url
                 width
                height
              }
              description{
                text
                
              }
            }
          }
          `,
          variables: {
            slug
          }
        });
    
      
        return {
          props: {
            product: data.products
           },
        }
      }






function product({product}) {

  // console.log(product)

    return (
      <div className="container-main">

        <div className ="container">

          {product.map((p) => (
            <div  className="row mx-auto" key ={p.id}>
              <div className="col col-sm-6">

                <ProductDetail image ={p.image} />
              </div>

              <div className="col col-sm-6">
                <div>
                  <p>{p.title}</p>
                  <p>{p.description.text}</p>
                </div>
              </div>
            
            </div>
          ))}


        </div>
      </div>
    );
}

export default product
