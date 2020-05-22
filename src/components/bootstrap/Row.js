//import lib
import React from 'react'

//create a component 
const Row = ({children, className}) => {
    return <div className={`row ${className}`}>{children}</div>
}

//export a component
export default Row;