//import lib
import React from 'react';
import FormRow from '../FormRow';
import FormGroup from '../FormGroup';
import DefaultOption from '../OptionDefault';

const days = () => {
    const arr = [];
    for (let index = 1; index < 31; index++) {
        arr.push(<option key={index} value={index}>{index}</option>)
    }

    return arr;
}

const months = (months) => {
    let monthList = [];

    monthList = months.map((month) => {
        return (<option key={month} value={month}>{month}</option>);
    })

    return monthList;
}

const years = (maxYear, minYear) => {
    const arr = [];
    for ( let index = maxYear; index >= minYear; index--) {
        arr.push(<option key={index} value={index}>{index}</option>)
    }
    return arr;
}


//create a component
const DataField = (props) => {
    const monthList = ["Month","January", "February", "March", "April", "May", "June",
                       "July", "August", "September", "October", "November", "December"];

    return (
        <FormRow>
            <FormGroup className='col-3'>
                <select 
                    id={props.dayId}
                    name={props.dayName}
                    className='form-control'
                    value={props.dayValue}
                    onChange={props.onChange} 
                    required={props.required}>
                    <DefaultOption>{props.dayPlaceholder}</DefaultOption>
                    {days()}
                </select>
            </FormGroup>
            <FormGroup className='col-5'>
                <select 
                    id={props.monthId}
                    name={props.monthName}
                    className='form-control' 
                    value={monthList[props.monthValue]} 
                    onChange={(event) => props.onMonthSelect(event, monthList)} 
                    required={props.required}>
                    <DefaultOption>{props.monthPlaceholder}</DefaultOption>
                    {months(monthList)}
                </select>
            </FormGroup>
            <FormGroup className='col-4'>
                <select 
                    id={props.yearId}
                    name={props.yearName} 
                    className='form-control' 
                    value={props.yearValue} 
                    onChange={props.onChange}  
                    required={props.required}>
                    <DefaultOption>{props.yearPlaceholder}</DefaultOption>
                    {years(props.maxYear,props.minYear)}
                </select>
            </FormGroup>
        </FormRow>
    );
}

DataField.defaultProps = {
    dayId: 'dayId',
    dayName: 'day',
    required: false,
    dayPlaceholder: 'Day',
    monthId: 'monthId',
    monthName: 'month',
    monthPlaceHolder: 'Month',
    yearId: 'yearId',
    yearName: 'year',
    yearPlaceholder: 'Year',
    minYear: 1900,
    maxYear:2100
};

//export a component
export default DataField;