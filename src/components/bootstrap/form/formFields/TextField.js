//import lib
import React, { Component } from 'react'
import FormGroup from '../FormGroup'

//create a component
class TextField extends Component{

  composeTextField = () => {
    if(this.props.labelText){
      return (
          <div>
            <label htmlFor='{props.id}'>{this.props.labelText}</label>
            <input 
              className='form-control'
              type='text' 
              id={this.props.id} 
              name={this.props.name} 
              value={this.props.value} 
              onChange={this.props.onChange}
              placeholder={this.props.placeholder}
              required={this.props.required}
            />
          </div>
      );
    }else{
      return(
          <input 
            className='form-control'
            type='text' 
            id={this.props.id} 
            name={this.props.name} 
            value={this.props.value} 
            onChange={this.props.onChange}
            placeholder={this.props.placeholder}
            required={this.props.required}
          />
      );
    }
  }
  
  render(){
    return (
      <FormGroup className={this.props.className}>
        {this.composeTextField()}
      </FormGroup>
    );
  }
}

//export a component 
export default TextField;