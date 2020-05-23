//import lib
import React from 'react';

//create a component
const PasswordField = (props) => {
    return (
        <input 
          className='form-control'
          type='password' 
          id={props.id} 
          name={props.name} 
          value={props.value} 
          onChange={props.onChange}
          placeholder={props.placeholder}
          required={props.required}
        />
    );
}

// export a component
export default PasswordField