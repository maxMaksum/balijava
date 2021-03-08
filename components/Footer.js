import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <div className="container">
            <div className="">
                <Link href="./">
                    <a className="btn">
                    Home</a>
                </Link>

                <Link href="./contact">

                <a className="btn">
               
                    Contact</a>
                
                </Link>
               
                <Link href="/products" >

                <a className="btn"> 
                
                Products</a>
                
                </Link>
            


            </div>
        </div>
    )
}

export default Footer


