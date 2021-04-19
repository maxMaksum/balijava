import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'


function Search() {

    let iconStyles = { color: "grey", fontSize: "px" };

    return ( 
    

        <form className = "d-flex flex-row no-gutter align-items-center w-100 container bg-info rounded" style={{height:"30px"}}>
             <select className = "col-3 btn btn-sm mx-0 px-0" >
                        <option > Choose... </option> 
                        <option > dress </option>
                        <option > pants </option>
                </select>
            <input type="text" className="col-8 mx-0 w-100  " />

            <div className = "d-flex flex-row align-items-center justify-content-center mx-auto" type = "submit" >
                <FaSearch style = { iconStyles }/> 
            </div>

        </form>
      
    );
}

export default Search