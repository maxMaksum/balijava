import React , {useState} from 'react'
import { gql, useQuery } from "@apollo/client";

import {
   
    atom,
    useRecoilState,
  } from 'recoil';
  

const Get_Products = gql`
query productsQuary ($title: String $catagory:String  $pagination:Int) {
  products(where
    :{ OR: [{ title_contains:$title }, { catagories_every:{
      title:$catagory
    } }] 
    }
    first:$pagination
  ) {
    id
    title
    catagories{
      title
    }
    
    description{
      text
    }
    image {
      url
       width
      height
    }
    description{
      text
      
    }
  }
}
`


function search() {
    
  const productState= atom({
    key: 'dataP', 

    default: [],
  });

    const [product, setProduct] = useRecoilState(dataP);


 

      const [title, setTitle] = useState("")
      const [catagory, setCatagory] = useState("")


      const [newTitle, setNewtitle] = useState("")
      const [newCatagory, setNewcatagory] = useState("")

      const [pagination, setPagination] = useState(10)

    const { loading, error, data } = useQuery(Get_Products,
     {
        variables: { 
          
          title :title,
          catagory: catagory,
          pagination:pagination
        }
      
      })
    ;
    
      if (loading) return null;
      if (error) return `Error! ${error}`;

    setProduct(data)
    const handleChange = (e) =>{
      e.preventDefault()
      console.log(newTitle , newCatagory)
      setTitle(newTitle)
      setCatagory(newCatagory)
      console.log(data)
    }
  


    return (

      <div className="container-main">
          {console.log(productState)}
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
                  placeholder="search"
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

export default search
