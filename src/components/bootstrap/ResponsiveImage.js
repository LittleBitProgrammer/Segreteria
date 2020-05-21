//import lib
import React from 'react';

// create a component
const ResponsiveImage = ({path,altText,className}) => {
    return <img src={path} alt={altText} className={`img-fluid ${className}`}/>
}

//export a component
export default ResponsiveImage;