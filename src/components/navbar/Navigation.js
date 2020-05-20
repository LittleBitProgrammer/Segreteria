//import lib
import React from 'react';
import {NavLink} from 'react-router-dom';
import Toggler from './Toggler';

//create a component
const Navigation = ({className, navBrandName, children}) => {

  return (
    <nav className={className}>
      <NavLink className="navbar-brand" activeClassName='active' to="/">{navBrandName}</NavLink>
      <Toggler/>
      <div className='collapse navbar-collapse' id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">{children}</ul>
      </div>
    </nav>
  )
}

//export a component
export default Navigation;