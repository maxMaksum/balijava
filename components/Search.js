import React , {useState} from 'react'
import { gql, useQuery } from "@apollo/client";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function Search() {
    return (
      <div className="container-main">
        <h3>Hallo</h3>

        <div className ="container-fluid">

          <form className="form-inline container align-items-center">

                <select
                className="btn btn-sm border border-gray"
                  onChange={(e) => setNewcatagory(e.target.value)}
                  value={newCatagory}
                >
                  <option value="">None</option>
                  <option value="dress">dress</option>
                  <option value="pants">pants</option>
                </select>
              
          

           
             
                <input
                  className="btn btn-sm border border-gray w-50"
                  type="text"
                  placeholder="Search"
                  value={newTitle}
                  onChange={(e) => setNewtitle(e.target.value)}
                />
             
            <div className="w-5 btn btn-sm border border-gray" type="submit" onClick={handleChange}>
              search
            </div>
           
          </form>
        </div>
      </div>
    );
}

export default Search
