import React from 'react'
import Link from 'next/link'
import {SiderSocial} from '../../components/SidbarData'
import {motion} from 'framer-motion'

function Test() {
    return (
        <div className="container">
           
        <div className="w-100 d-flex  align-items-center justify-content-end showin__big ">
       
            {SiderSocial.map(sc=>(
             <div key ={sc.title}>
            <Link  href="/contact">
                <motion.a 
                 whileHover={{ 
                    scale: 1.1, 
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                className=" p-2 text-success showin__big">{sc.icon}
                </motion.a>
            </Link >  
               </div>
              
            ) )}
        </div>
        </div>
    )
}

export default Test
