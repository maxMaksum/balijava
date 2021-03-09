import React, {useState} from 'react'
import {FaAlignRight, FaSistrix } from 'react-icons/fa';
import Link from 'next/link'



function MyNavbar() {
    const [isOpen, setIsOpen]=useState(false)

    const handleClick = ()=>(setIsOpen(!isOpen))

    return (
        <div className="navbar-wrapper">
            
           <div className="nav__container">
                    <div className="navright_container ">
                        <Link href="/">
                            <a className="nav__logo  mt-3" >

                                {/* <img
                                    className ="header__logo"
                                    src="/vercel.svg"
                                
                                /> */}
                               <p className="btn btn-outline-secondary btn-sm header__logo">At Bali Java</p> 
                            </a>
                        </Link>


                    </div>

              
                <div className = "nav__menu__big ">
                    <Link  href="/about">
                        <a className="nav__menu__item btn btn-outline-secondary  btn-sm px-4 text-white ">About</a>
                     </Link >

                     <Link  href="/products">
                        <a className="nav__menu__item btn btn-outline-secondary btn-sm px-4 text-white ">Products</a>
                     </Link >
                     <Link  href="/contact">
                        <a className="nav__menu__item btn btn-outline-secondary btn-sm px-4 text-white ">Contact</a>
                     </Link >
                           
                </div>
                  
                    <div onClick={handleClick} className="nav__humberger">
                        <div className="menu-logo"> <
                             FaAlignRight
                            / >
                        </div>
            </div>
                  
                </div>
 
            {isOpen ? (
                 <div className = "nav__menu">
                      <Link  href="/about">
                        <a className="nav__menu__item  m-2 text-white ">Sign In</a>
                     </Link >
                     <Link  href="/about">
                        <a className="nav__menu__item  m-2 text-white ">Sign Out</a>
                     </Link >
                     <Link  href="/about">
                        <a className="nav__menu__item  m-2 text-white ">About</a>
                     </Link >
                     <Link  href="/products">
                        <a className="nav__menu__item  m-2 text-white ">Product</a>
                     </Link >
                     <Link  href="/contact">
                        <a className="nav__menu__item  m-2 text-white ">Contact</a>
                     </Link >
                   
                </div>):(
                <a className="nav__helper">Lorem ipsum</a>
            )}

            <style jsx> { `
                
                .header__logo{
                    width:100 px;
                    object-fit:contain;
                    color:white;
                }

                .header__search{
                    display:flex;
                    align-items:center;
                    border-radius:20 px;
                    boder:none;
                    height:20px;

                }

                .header__search__logo{
                    height:26px;
                    color:white;
                    background:green;
                    boder:none

               
                }
                
                
                `
                }
            </style>
                            
          
        </div>
    )
}

export default MyNavbar
