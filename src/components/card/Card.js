//import lib
import React from 'react'

// create a component
const Card = ({children}) => {
    return (
        <div className="card mb-3 mx-auto" style={{maxWidth: '540px'}}>
            <div className="row no-gutters">
                {children}
            </div>
        </div>
    );
}

//export a component
export default Card;