import React, {useState} from 'react'
import {FaAlignRight,FaWhatsapp, FaTimes, FaFacebookF} from 'react-icons/fa';
import Link from 'next/link'
import { Dropdown } from 'react-bootstrap'



function MyNavbar() {
    const [isOpen, setIsOpen]=useState(false)

    const handleClick = ()=>(setIsOpen(!isOpen))

    return (
    
    <div className="navbar-wrapper position-relative">
            
        <div className="nav__container position-fixed fixed-top">
            <div className="navright_container ">
                <Link href="/">
                    <a className="nav__logo  mt-3" >
                       <p className="nav__menu__item   px-3 rounded  ml-4 header__logo">At Bali Java</p> 
                    </a>
                </Link>

                <div className="d-flex social-menu ">
                    <Link href="https://wa.me/6281246951065">
                        <a className="social-logo text-success text-lg fa-5x  mx-2 px-2"> 
                            <FaWhatsapp size={20} />
                        </a>
                    </Link>

                    <Link href="#">
                        <a className="social-logo text-primary mx-2 px-2"> 
                       
                            < FaFacebookF size={20} />
                        </a>
                    </Link>

    
                </div>
                
                
                

            </div>

            

            <div className = "nav__menu__big ">

                <Dropdown className="dropdown__container">
                    <Dropdown.Toggle className=" nav__menu__item  px-3 text-white" variant="transparent" id="dropdown-basic">
                        Products
                    </Dropdown.Toggle>
                   
                        <Dropdown.Menu className="d-block dropdown__menu  " >
                                <Link  href="/pants">
                                    <a className="d-block dropdown-item pl-4 text-white btn-success  btn-small px-3  mb-2">Pants</a>
                                </Link>
                                <Link  href="/dress">
                                    <a className="d-block dropdown-item pl-4 text-white btn-success  btn-small px-3 ">Dress</a>
                                </Link>

                      
                            
                    </Dropdown.Menu>
                </Dropdown>
                  
                    <Link  href="/about">
                        <a className="nav__menu__item   px-3 text-white ">About</a>
                     </Link >

                     <Link  href="/contact">
                        <a className="nav__menu__item  px-4 text-white ">Contact</a>
                     </Link >
                   
            </div>
                  
            <div onClick={handleClick} className="nav__humberger">
                <div className="menu-logo mx-2 px-2"> 
                    <FaAlignRight size={20} />
                </div>
            </div>
                  
    </div>

 
            {isOpen ? (
        <div className = "nav__menu">
                
                <div   onClick={handleClick}className="nav__menu__item ml-4 mt-4 text-white ">
                    <FaTimes />

                </div>
                


                <Dropdown className="  dropdown__container drop-right m-2 nav__menu__item " 
                    key={'right'}
                    id={`dropdown-button-drop-right`}
                    drop={'right'}
                    variant="secondary"
                    title={`Drop ${'right'}`}>
                    <Dropdown.Toggle className=" nav__menu__item  btn btn-outline-dark border-0 btn-sm text-white px-4 mt-4" variant="transparent" id="dropdown-basic">
                        Products
                    </Dropdown.Toggle>
                   
                        <Dropdown.Menu className="d-block new__menu__right ml-3" >
                                 <Link  href="/pants">
                                    <a className="d-block dropdown-item pl-4  btn btn-sm text-white px-4 mb-2">Pants</a>
                                </Link>
                                <Link  href="/dress">
                                    <a className="d-block dropdown-item pl-4  text-white btn btn-sm px-4">Dress</a>
                                </Link>

                    
                    </Dropdown.Menu>
                </Dropdown>
                    <Link  href="/about">
                        <a className="nav__menu__item m-2  btn btn-outline-dark border-0 btn-sm px-4 text-white ">About</a>
                     </Link >

                     <Link  href="/contact">
                        <a className = "nav__menu__item m-2   btn btn-outline-dark border-0 btn-sm px-4 text-white ">Contact</a>
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
