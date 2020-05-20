//import lib
import React from 'react';
import { Link } from 'react-router-dom';

//create a component (this component work only with bootstrap)
const NavItem = props => {
    const pageURI = window.location.pathname+window.location.search;
    const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
    const aClassName = props.disabled ? "nav-link disabled" : "nav-link";
    console.log(pageURI,liClassName,aClassName);
    
    return (
      <li className={liClassName}>
        <Link to={props.path} className={aClassName}>
          {props.name}
          {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
        </Link>
      </li>
    );
  }

// export a component 
export default NavItem;