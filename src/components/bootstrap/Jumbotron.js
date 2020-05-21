//import lib
import React from 'react';

//create a component
const Jumbotron = ({children}) => {
    return (
        <div className='jumbotron'>
            {children}
        </div>
    );
}

//export a component
export default Jumbotron;