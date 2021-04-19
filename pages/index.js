import React, {useState} from 'react';
import Head from 'next/head'
import Link from "next/link"
import {request} from 'graphql-request'
import {useQuery} from "react-query"
import {getPages, endpoint, pagesQuery, sliderPage} from '../graphql/schema'
import Products_Slider from '../components/Slider/Products_Slider';
import SliderPage from '../components/Slider/SliderPage';
import Quote from '../components/Card/Quote';


export async function getStaticProps(context) {
 
  const initialPages = await getPages()
 

  return {
    props: { initialPages} // will be passed to the page component as props
  }
}


export default function Home ( {initialPages}) {

const pagesFn = async() =>{
  return request (endpoint, pagesQuery)
}
const {data} = useQuery('pages', pagesFn, {initialData:initialPages}
)


return (

    <div className="container-main">
         <Head>
        <title>At BaliJava</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

         <div>
           <SliderPage/>
           
         </div>
      
        <div>
          <Quote/>
          <h5 className="text-center container border border-light card-title  text-dark py-2">Home Page</h5>
        </div>

       <div>

         <div className="container w-100">

            <div className="row gx-5" >
                 {data.pages && data.pages.map((page)=>(
            
                    <Link href={`/page/${page.slug}`}  key={page.id}key={page.id}>
            
                      <div className="col-12 col-sm-6 col-md-4 ">
                        <div className="shadow p-3 mb-5 bg-white rounded">
                        <Products_Slider variants={page.images} />
                        <div className ="container ">
                          <div className="text-bold text-center">{page.title} </div> 
                          <span> {page.subtitle}</span>
                        </div>
                        
                      </div>
                      </div>
                     </Link>
            ))}
           </div>
        </div> 
           
         </div>
     
</div>
  )
}
