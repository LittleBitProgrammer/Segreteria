//import lib
import React from 'react'
import ResponsiveImage from './bootstrap/ResponsiveImage';

//create a component
const SubSectionTitle = (props) => {
    return (
        <h6 className="mb-3">
              <span>
                <ResponsiveImage path={props.logo} altText={props.altText} className={props.className} style={props.style}/>
              </span>
              {props.title}
        </h6>
    );
}

export default SubSectionTitle;