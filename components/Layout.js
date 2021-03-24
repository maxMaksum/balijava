import Footer from "./Footer";
import MyNavbar from "./MyNavbar";

function Layout({children}) {
    return (
          <div>

               
           <div className="layout">
                <MyNavbar className="navbar"/>
                <div className="top-60">
                {children}
                </div>
                <Footer/>
           </div>
            
        </div>
    )
}

export default Layout