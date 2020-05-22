//import lib
import React from 'react'
import ResponsiveImage from './bootstrap/ResponsiveImage';

//create a component
const SectionTitle = (props) => {
    return (
        <h1 className="text-center mb-3">
              <span>
                <ResponsiveImage path={props.logo} altText={props.altText} className={props.className} style={props.style}/>
              </span>
              {props.title}
        </h1>
    );
}

export default SectionTitle;