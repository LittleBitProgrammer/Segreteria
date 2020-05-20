//import lib
import React from 'react';
import {NavLink } from 'react-router-dom';

//create a component (this component work only with bootstrap)
const NavItem = ({name, exact, path, disabled}) => {
    const aClassName = disabled ? "nav-link disabled" : "nav-link";
    
    return (
      <li className='nav-item' data-toggle="collapse" data-target=".navbar-collapse.show">
        <NavLink to={path} className={aClassName} activeClassName='active' exact={exact}>
          {name}
        </NavLink>
      </li>
    );
  }

NavItem.defaultProps = {
  name: 'undefined',
  exact: false
};

// export a component 
export default NavItem;