import MyNavbar from "./MyNavbar";

function Layout({children}) {
    return (
          <div>

               
           <div>
                <MyNavbar/>
                {children}
           </div>
            
        </div>
    )
}

export default Layout