// import lib
import React from 'react';
import FormGroup from './bootstrap/FormGroup';
import FormRow from './bootstrap/FormRow';

//create a component
class StudentForm extends React.Component{
    constructor(props){
        super(props);

        this.maxYear = 2003;
        this.minYear = 1910;

        this.state = {
            firstName: '',
            lastName: '',
            cf: '',
            bDay: 'DEFAULT',
            bMonth: 'DEFAULT',
            bYear: 'DEFAULT',
        }
    }
    onChangeFields = (event) => {
        console.log(event.target.name, event.target.value);
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();
    }

    days = () => {
        const arr = [];
        for (let index = 1; index < 31; index++) {
            arr.push(<option key={index} value={index}>{index}</option>)
        }

        return arr;
    }

    months = () => {
        let monthList = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

        monthList = monthList.map((month) => {
            return (<option key={month} value={month}>{month}</option>);
        })

        return monthList;
    }

    years = () => {
        const arr = [];
        for ( let index = this.maxYear; index >= this.minYear; index--) {
            arr.push(<option key={index} value={index}>{index}</option>)
        }
        return arr;
    }


    
    render(){
        console.log('bDay ', this.state.bDay)
        return (
            <form onSubmit={this.onSubmit}>
                <FormRow>
                    <FormGroup className='col-6'>
                        <label htmlFor='firstNAme'>First name:</label>
                        <input 
                            className='form-control'
                            type='text' 
                            id='firstName' 
                            name='firstName' 
                            value={this.state.firstName} 
                            onChange={this.onChangeFields}
                            placeholder='Es. Mario'
                            required
                            />
                    </FormGroup>
                    <FormGroup className='col-6'>
                        <label htmlFor='lastNAme'>Last name:</label>
                        <input 
                            className='form-control'
                            type='text' 
                            id='lasttName' 
                            name='lastName' 
                            value={this.state.lastName} 
                            onChange={this.onChangeFields}
                            placeholder='Es. Rossi'
                            required
                            />
                    </FormGroup>
                </FormRow>
                <FormGroup>
                    <label htmlFor='cf'>Fiscal code:</label>
                    <input 
                      className='form-control'
                      type='text' 
                      id='cf' 
                      name='cf' 
                      value={this.state.cf} 
                      onChange={this.onChangeFields}
                      placeholder='Es. VCCRRT93R06F83A'
                      required
                      />
                </FormGroup>
                <div className='mb-2'>Date of Birth:</div>
                <FormRow>
                    <FormGroup className='col-4'>
                        <select 
                          id='Bday' 
                          name='bDay'
                          className='form-control' 
                          value={this.state.bDay}
                          onChange={this.onChangeFields} 
                          required>
                            <option value='DEFAULT' disabled>Day</option>
                            {this.days()}
                        </select>
                    </FormGroup>
                    <FormGroup className='col-4'>
                        <select 
                          id='Bmonth' 
                          name='bMonth'
                          className='form-control' 
                          value={this.state.bMonth} 
                          onChange={this.onChangeFields} 
                          required>
                            <option value='DEFAULT' disabled>Month</option>
                            {this.months()}
                        </select>
                    </FormGroup>
                    <FormGroup className='col-4'>
                        <select 
                          id='Byear' 
                          name='bYear' 
                          className='form-control' 
                          value={this.state.bYear} 
                          onChange={this.onChangeFields}  
                          required>
                            <option value='DEFAULT' disabled>Year</option>
                            {this.years()}
                        </select>
                    </FormGroup>
                </FormRow>
            </form>
        );
    }
}

//export a component
export default StudentForm;