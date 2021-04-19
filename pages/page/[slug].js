
import React, {useState} from 'react';
import Head from 'next/head'
import {getPages, getPage,} from '../../graphql/schema'
import Products_Slider from '../../components/Slider/Products_Slider';
import SliderDetail from '../../components/Utils/SliderDetail';
import Quote from '../../components/Card/Quote';

export async function getStaticPaths() {
    const data = await getPages()
    return{
        fallback: false,
        paths: data.pages.map((p)=>({params:{slug:p.slug}}))
    }

    }
    

export async function getStaticProps(context) {
   
    const newpages = await getPage(context.params.slug)

    return {
      props: {newpages} // will be passed to the page component as props
    }
  }
  


function pageDetail({newpages}) {
    const {title, subtitle, content, images, seoTitle, seoDescription} = newpages.page
    console.log(images)

    return (
        <div className="container-main bg-light p-2">
               <Head>
            <title>{seoTitle}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
            <SliderDetail/>
            <Quote/>
            <div className="container">
                <div className="shadow p-3 mb-5 bg-white rounded">
                <h5 className="text-center container border border-light card-title  text-dark py-2"> {title}</h5>
                    <div className="container">
                    <Products_Slider variants={images}/>
                    </div>
        
                    <div className="container">
               
                            
                        
                            <div>{content.text}</div>
                        
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default pageDetail
