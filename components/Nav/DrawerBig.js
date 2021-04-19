import React, {useState} from 'react'
import Link from 'next/link'
import SidebarData from "../../components/SidbarData";
import {useRecoilState} from 'recoil';
import {drawerState} from '../Recoil/State'
import {motion} from 'framer-motion'

function DrawerBig() {
    const [drawer, setDrawer] = useRecoilState(drawerState)
    let iconStyles = { color: "#F5F5F5", fontSize: "15px"};
    const handleClick =()=>{
        setDrawer(!drawer)
    }
    return (
        <div className="showin__big container-main">
           
                 <motion.div
                 initial={{x:-250}}
                 animate={{x:10}}
                 transition={{delay:0.2}}
                 className = " drawer-big d-flex flex-column scroll-div-big">
                    <div  class="list-group list-group-flush w-100 ">
                         {SidebarData.map(newIcon =>(
                            <div key={newIcon.title}>
                                <Link  href={newIcon.link}>
                                 <motion.a 
                                 whileHover={{ 
                                    scale: 1.1, 
                                    textShadow: "0px 0px 8px rgb(255,255,255)",
                                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                                  }}
                                 className=" list-group-item w-100">
                                    <div className ="bg-primary btn btn-sm  w-75 d-flex flex-column justify-content-center align-items-center">
                                    <div  style={iconStyles} >{newIcon.icon}</div>
                                    <div className="text-uppercase fw-bolder text-light mt-2">
                                        {newIcon.title}
                                    </div>
                                
                                    </div>
                                </motion.a>
                             </Link >
                    </div>))}
                          
                        </div>
                    </motion.div>
               
        </div>
    )
}

export default DrawerBig
