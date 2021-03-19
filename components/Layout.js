import MyNavbar from "./MyNavbar";

function Layout({children}) {
    return (
          <div>

               
           <div className="layout">
                <MyNavbar/>
                {children}
           </div>
            
        </div>
    )
}

export default Layout