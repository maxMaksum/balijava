import React from 'react'
import Link from 'next/link'
import {FaAlignRight, FaHome} from 'react-icons/fa';
import {
  
    useRecoilState,
   
  } from 'recoil';
import MenuSmall from './MenuSmall';
import MenuRight from './MenuRight';
import reposState from '../Recoil/State'
import {drawerState} from '../Recoil/State'

function NewNew() {
    let iconStyles = {
         color: "#292b2c", 
         fontSize: "15px",
        };
    const [repos, setRepos] = useRecoilState(reposState);
    const [drawer, setDrawer] = useRecoilState(drawerState)
    return (
        <div className="position-relative mb-0 pb-0">
        <div className="new__menu position-fixed fixed-top">

        <div className="bg-white d-flex align-items-center border" style={{height:"60px"}}>
            <div className="row no-gutter d-flex align-items-center w-100 ml-0">

                <div className="col-8 col-sm-6 w-100 d-flex align-items-center" >
                    <div className="w-100 row px-0 m-0 d-flex align-items-center">
                        <div className="col">
                            <div className="d-flex flex-row align-items-center">
                                <div className="" style ={{height:"50px", width:"50px",}}>
                                <img className="navbar-brand" src="./skull.svg" style ={{height:"100%", width:"100%", obbjectFit:"contain"}}/>
                                </div>
                                <Link href="/">
                                <a  className ="ml-2" > 
                                <FaHome style={iconStyles} className="text-success"  />
                                </a>
                             </Link>
                            </div>
                            <MenuSmall/>
                        </div>
                      
                    </div>
                    
                </div>

                <div className="col-4 col-sm-6 w-100  container w-100" >

                            <div className="d-flex  w-100  showin__big">
                         
                                <MenuRight  />

                                <div className="showin__big  d-flex align-items-center text-dark">
                                  <FaAlignRight style={{ size:"15px"}} onClick= {()=>setDrawer(!drawer)} className="showin__big" />
                               </div> 
                            
                          
                            <div> 
                </div>
                
                        <div className="col showin__small container d-flex justify-content-end align-items-center">
                          
                            <div className="showin__small">
                                <FaAlignRight style={{color:"#292b2c", size:"15px"}} onClick= {()=>setRepos(!repos)} className=""/>
                            </div>
                          
                           
                        </div>
                    </div>
                    
                </div>

                {/* <div className="col-4  col-sm-6 d-flex justify-content-end ml-0">
                        
                
                </div> */}

            </div>
           
            </div> 

   
            
        </div>
        </div>
    )
}

export default NewNew
