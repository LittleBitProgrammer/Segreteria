//import lib
import React from 'react';

//create a component
const CardImage = ({image, altText}) => {
    return (
        <div className="col-md-4 p-4">
            <img src={image} className="card-img" alt={altText}/>
        </div>
    );
}

//export a component
export default CardImage;