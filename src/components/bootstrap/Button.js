//import lib
import React from 'react';

//create a component
const Button = (props) => {
    return (
        <button className={`btn ${props.colorClass}`} type={props.type}  disabled={props.isDisabled}>{props.children}</button>
    );
}

//export a component
export default Button;