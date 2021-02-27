import React, {useState} from 'react'
import {FaAlignRight } from 'react-icons/fa';
import Link from 'next/link'



function MyNavbar() {
    const [isOpen, setIsOpen]=useState(false)

    const handleClick = ()=>(setIsOpen(!isOpen))

    return (
        <div class="navbar-wrapper container">
            
           <div class="nav__container ">
                    <div class="navright_container">
                        <Link href="/">
                            <a class="nav__logo mt-3" >
                               <p className="btn btn-outline-secondary btn-sm">At Bali Java</p> 
                            </a>
                        </Link>
                       
                    </div>
                <div className = "nav__menu__big">
                    <Link  href="/about">
                        <a className="nav__menu__item btn btn-outline-secondary  btn-sm px-4 ">About</a>
                     </Link >

                     <Link  href="/products">
                        <a className="nav__menu__item btn btn-outline-secondary btn-sm px-4 ">Products</a>
                     </Link >
                     <Link  href="/about">
                        <a className="nav__menu__item btn btn-outline-secondary btn-sm px-4 ">Contact</a>
                     </Link >
                           
                </div>
                  
                    <div onClick={handleClick} class="nav__humberger">
                        <a className="menu-logo"> < FaAlignRight/      ></a>
            </div>
                  
                </div>
 
            {isOpen ? (
                 <div className = "nav__menu">
                     <Link  href="/about">
                        <a className="nav__menu__item btn btn-outline-secondary btn-sm my-2 ">About</a>
                     </Link >
                     <Link  href="/products">
                        <a className="nav__menu__item btn btn-outline-secondary btn-sm my-2 ">Product</a>
                     </Link >
                     <Link  href="/contact">
                        <a className="nav__menu__item btn btn-outline-secondary btn-sm my-2 ">Contact</a>
                     </Link >
                   
                </div>):(
                <a className="nav__helper">Lorem ipsum</a>
            )}
                            
          
        </div>
    )
}

export default MyNavbar
