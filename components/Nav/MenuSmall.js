import React, {useState} from 'react'
import Link from 'next/link'
import SidebarData from "../../components/SidbarData"
import {useRecoilState} from 'recoil';
import reposState from '../Recoil/State'

import {motion} from 'framer-motion'

function MenuSmall() {
    const [repos, setRepos] = useRecoilState(reposState)
    const isOpen = repos

    let iconStyles = { color: "black", fontSize: "15px"};
    
    const handleClick =()=>{
        setRepos(!repos)
    }
    return (
        <div className="showin__small">
            {isOpen ? (
        <motion.div 
        initial={{x:-250}}
        animate={{x:10}}
        transition={{delay:0.5}}
        
        className = "nav__menu showin__small d-flex flex-column">
                <div  class="list-group list-group-flush w-100 scroll-div ">
                   {SidebarData.map(newIcon =>(
                        <div key={newIcon.title}>
                            <Link  href={newIcon.link}>
                                <motion.a 
                                whileHover={{ 
                                    scale: 1.1, 
                                    textShadow: "0px 0px 8px rgb(255,255,255)",
                                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                                  }}
                                className=" list-group-item">
                                    <div className =" bg-primary btn btn-sm  w-75 d-flex justify-content-start align-items-center pl-2">
                                    <div  className ="text-light"style={iconStyles} >{newIcon.icon}</div>
                                    <div className="text-uppercase fw-bolder text-light ml-4">
                                        {newIcon.title}
                                    </div>
                                
                                    </div>
                                </motion.a>
                             </Link >
                    </div>))}
                </div>
                </motion.div>):(
                <a className="nav__helper">Lorem ipsum</a>
            )}

        </div>
    )
}

export default MenuSmall
