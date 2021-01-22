import React from 'react'
import '../Style/error.css';
function Error({product}) {
    return (
        <div className="error">
         <p>Please! Search by brand name or product type.
             <br/> Otherwise, we don't have a product as such <strong>{product}</strong> </p>   
        </div>
    )
}

export default Error
