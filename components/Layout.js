import MyNavbar from "./MyNavbar";

function Layout({children}) {
    return (
          <div>

               
           <div className="layout">
                <MyNavbar className="navbar"/>
                <div className="top-60">
                {children}
                </div>
           </div>
            
        </div>
    )
}

export default Layout