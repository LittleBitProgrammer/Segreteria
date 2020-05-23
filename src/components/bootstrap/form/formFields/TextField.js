//import lib
import React from 'react'

//create a component
const TextField = (props) => {
    return (
        <input 
          className='form-control'
          type='text' 
          id={props.id} 
          name={props.name} 
          value={props.value} 
          onChange={props.onChange}
          placeholder={props.placeholder}
          required={props.required}
        />
    );
}

//export a component 
export default TextField;