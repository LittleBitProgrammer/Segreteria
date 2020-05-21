//import lib
import React from 'react';

//create a component
const CardBody = ({children}) => {
    return (
        <div className="col-md-8">
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}

//export a component
export default CardBody;