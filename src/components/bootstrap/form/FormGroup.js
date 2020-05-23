//import lib
import React from 'react'

// create a compoent
const FormGroup = ({children, className}) => {
    return (
        <div className={`form-group ${className}`}>
            {children}
        </div>
    );
}

//export a component
export default FormGroup;