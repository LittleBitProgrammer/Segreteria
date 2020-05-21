//import lib
import React from 'react';

//create a component
const BottomBar = ({leftText, author}) =>{
    return (
        <nav className="navbar navbar-expand navbar-light bg-light fixed-bottom">
            <span className="navbar-text">
                    {leftText}
            </span>
            <span className="navbar-nav mr-auto"></span>
            <span className="navbar-text">
                Developed By <span className='text-primary'>{author}</span>
            </span>
        </nav>
    );
}

//export a component
export default BottomBar;