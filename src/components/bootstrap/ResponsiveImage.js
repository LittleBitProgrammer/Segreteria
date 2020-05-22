//import lib
import React from 'react';

// create a component
const ResponsiveImage = ({path,altText,className,style}) => {
    return <img src={path} alt={altText} className={`img-fluid ${className}`} style={style}/>
}

//export a component
export default ResponsiveImage;