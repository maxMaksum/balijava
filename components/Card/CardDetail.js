import React from 'react'
function CardDetail({ subtitle, content, title}) {

    return (
        <div className="bg-white">

                <div className=" text-center">{title}</div>
                    <div className="">{subtitle}</div>

                <div className ="py-2">{content} </div>
    
        </div> 
    )
}

export default CardDetail
