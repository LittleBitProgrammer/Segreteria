//import lib
import React from 'react';

//create a component
const CardImage = ({image, altText, style}) => {
    return (
        <div className="col-md-4 p-4">
            <img src={image} className="card-img mt-5 mb-5" alt={altText} style={style}/>
        </div>
    );
}

//export a component
export default CardImage;