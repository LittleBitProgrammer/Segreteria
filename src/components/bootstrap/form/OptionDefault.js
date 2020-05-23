//import lib
import React from 'react';

//create a component
const DefaultOption = (props) => {
    return <option value='DEFAULT' disabled>{props.children}</option>
}

//export a component
export default DefaultOption;