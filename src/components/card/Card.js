//import lib
import React from 'react'

// create a component
const Card = ({children, className}) => {
    return (
        <div className={`card mb-3 ${className}`} style={{maxWidth: '640px'}}>
            <div className="row no-gutters">
                {children}
            </div>
        </div>
    );
}

//export a component
export default Card;