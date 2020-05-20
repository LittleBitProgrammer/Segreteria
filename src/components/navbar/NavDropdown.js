//import lib
import React from 'react'

//create a component
const NavDropdown = ({name, children}) => {
    
  return (
    <li className="nav-item dropdown">
      <a 
        className="nav-link dropdown-toggle" 
        href="/" id="navbarDropdown"
        role="button" data-toggle="dropdown"
        aria-haspopup="true" 
        aria-expanded="false">
        {name}
      </a>
      <div className='dropdown-menu' aria-labelledby="navbarDropdown">
        {children}
      </div>
    </li>
  )
}

//export a component
export default NavDropdown;