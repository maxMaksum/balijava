import React from 'react'
import Products_Slider from '../components/Products_Slider'
import Link from 'next/link'

export const getStaticProps = async()=>{
   
    const {NEXT_PUBLIC_API} = process.env

    const res = await fetch(`${NEXT_PUBLIC_API}/new-products`)
    const data = await res.json()

    return {
        props:{ HomeProducts:data
        }
    }
}


function HomeCards({HomeProducts}) {
  
    console.log(HomeProducts)
    console.log(process.env.NEXT_PUBLIC_API )
    return (
        <div className="container mt-100">
            <div className="row">
            {/* {HomeProducts.map(hp=>(
                
               <div>{console.p}</div>
            ))} */}

            </div>
            
            
        </div>
    )
}

export default HomeCards

