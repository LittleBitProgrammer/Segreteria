//import lib
import React from 'react';

//create a component
const FormRow = ({children}) => {
    return (
        <div className='form-row'>
            {children}
        </div>
    );
}

//export a component
export default FormRow;