import React from 'react'
export const getStaticProps = async()=>{

    const newDress= await client.collection.fetchWithProducts("Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2MTQ5NjE0NDA4MQ==")
  
    return {
      props: {
        dress: JSON.parse(JSON.stringify(newDress)),
     
       },
    }
  }

function about() {

    return (
        <div>
            
        </div>
    )
}

export default about
