import Footer from "./Footer";
import NewNew from "../Nav/NewNew";

import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
    useSetRecoilState,
  } from 'recoil';
import reposState from '../Recoil/State'
import {drawerState} from '../Recoil/State'
import DrawerBig from "../Nav/DrawerBig";


function Layout({children}) {
    const [repos, setRepos] = useRecoilState(reposState);
    const [drawer, setDrawer] = useRecoilState(drawerState)

    
    return (
          <div>

               
        <NewNew className="navbar position-relative"/>
           <div className="d-flex">
               {drawer?(<div className={``}>
                    <DrawerBig/>
                </div>):(null)}
                
                <div className="w-100">
                    <div className="top-60 " onClick= {()=>setRepos(false)}>
                    {children}
                    </div>
                    <Footer/>
                </div>
           </div>
            
        </div>
    )
}

export default Layout