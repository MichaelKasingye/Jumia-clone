import React from 'react'
import '../Style/error.css';
function Error({heading}) {
    return (
        <div className="error">
         <p>{heading}</p>   
        </div>
    )
}

export default Error
