// import lib
import React from 'react';
import FormGroup from './bootstrap/form/FormGroup';
import FormRow from './bootstrap/form/FormRow';
import Button from './bootstrap/Button';
import PasswordField from './bootstrap/form/formFields/PasswordField';
import TextField from './bootstrap/form/formFields/TextField';
import EmailField from './bootstrap/form/formFields/EmailField';
import DateField from './bootstrap/form/formFields/DateField';
import myUniversity from '../api/myUnivesity';

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
            birthPlace: '',
            address: '',
            addressNumber: '',
            cap: '',
            freshman: '',
            studentEmail: '',
            matriculationDay: 'DEFAULT',
            matriculationMonth: 'DEFAULT',
            matriculationYear: 'DEFAULT',
            courseCode: '',
            studentPassword: ''
        }
    }
    onChangeFields = (event) => {
        console.log(event.target.name, event.target.value);
        this.setState({[event.target.name]: event.target.value});
    }

    onMonthSelect = (event, months) => {
        this.setState({[event.target.name]: (months.indexOf(event.target.value) + 1)})
    }

    onSubmit = async(event) => {
        event.preventDefault();
        console.log(this.state);

        try{
            const response = await myUniversity.post('/secretary/studente', {
                cf: this.state.cf,
                nome: this.state.firstName,
                cognome: this.state.lastName,
                data_di_nascita: `${this.state.bYear}-${this.state.bMonth}-${this.state.bDay}`,
                luogo_di_nascita: this.state.birthPlace,
                cap: this.state.cap,
                via_piazza: this.state.address,
                civico: this.state.addressNumber,
                matricola_studente: this.state.freshman,
                email_studente: this.state.studentEmail,
                data_immatricolazione: `${this.state.matriculationYear}-${this.state.matriculationMonth}-${this.state.matriculationDay}`,
                password_studente: this.state.studentPassword,
                codice_corso: this.state.courseCode
            })
            console.log(response);
        }catch (error){
            console.log(':"( There was an error:' + error);
        }
    }
    
    render(){
        const isDisabled =
          this.state.firstName &&
          this.state.lastName &&
          this.state.cf &&
          this.state.bDay !== "DEFAULT" &&
          this.state.bMonth !== "DEFAULT" &&
          this.state.bYear !== "DEFAULT" &&
          this.state.birthPlace &&
          this.state.address &&
          this.state.addressNumber &&
          this.state.cap &&
          this.state.freshman &&
          this.state.studentEmail &&
          this.state.matriculationDay !== "DEFAULT" &&
          this.state.matriculationMonth !== "DEFAULT" &&
          this.state.matriculationYear !== "DEFAULT" &&
          this.state.courseCode &&
          this.state.studentPassword;

        return (
            <form onSubmit={this.onSubmit}>
                <FormRow>
                    <TextField
                      id='firstName' 
                      name='firstName' 
                      labelText='First name:'
                      value={this.state.firstName} 
                      onChange={this.onChangeFields}
                      placeholder='Es. Mario'
                      className='col-6'
                      required={true}
                    />
                    <TextField 
                      id='lasttName' 
                      name='lastName' 
                      labelText='Last name:'
                      value={this.state.lastName} 
                      onChange={this.onChangeFields}
                      placeholder='Es. Rossi'
                      className='col-6'
                      required={true}
                    />
                </FormRow>
                <TextField
                  id='cf' 
                  name='cf' 
                  labelText='Fiscal code:'
                  value={this.state.cf} 
                  onChange={this.onChangeFields}
                  placeholder='Es. VCCRRT93R06F83A'
                  required={true}
                />
                <div className='mb-2'>Date of Birth:</div>
                <DateField
                  dayId='Bday'
                  monthId='Bmonth'
                  yearId='Byear'
                  dayName='bDay'
                  monthName='bMonth'
                  yearName='bYear'
                  dayValue={this.state.bDay}
                  monthValue={this.state.bMonth-1}
                  yearValue={this.state.bYear}
                  maxYear={this.maxYear}
                  minYear={this.minYear}
                  onChange={this.onChangeFields}
                  onMonthSelect={this.onMonthSelect}
                  required={true}
                />
                <TextField 
                  id='birthPlace' 
                  name='birthPlace'
                  labelText='Birth place:' 
                  value={this.state.birthPlace} 
                  onChange={this.onChangeFields}
                  placeholder='Es. Naples'
                  required={true}
                />
                <div className='mb-2'>Domicile:</div>
                <FormRow>
                    <TextField  
                      id='address' 
                      name='address' 
                      value={this.state.address} 
                      onChange={this.onChangeFields}
                      placeholder='Es. Via Leopardi'
                      className='col-6'
                      required={true}
                    />
                    <TextField
                      id='addressNumber' 
                      name='addressNumber' 
                      value={this.state.addressNumber} 
                      onChange={this.onChangeFields}
                      placeholder='Es. 5'
                      className='col-3'
                      required={true}
                    />
                    <TextField
                      id='cap' 
                      name='cap' 
                      value={this.state.cap} 
                      onChange={this.onChangeFields}
                      placeholder='Es. 8012'
                      className='col-3'
                      required={true}
                    />
                </FormRow>
                <TextField 
                  id='freshman' 
                  name='freshman' 
                  value={this.state.freshman} 
                  onChange={this.onChangeFields}
                  placeholder='Es. 0124001871'
                  labelText='Freshman:'
                  required={true}
                />
                <FormGroup>
                    <label htmlFor='studentEmail'>University Email:</label>
                    <EmailField 
                      id='studentEmail' 
                      name='studentEmail' 
                      value={this.state.studentEmail} 
                      onChange={this.onChangeFields}
                      placeholder='Es. name.surname001@studenti.uniparthenope.it'
                      required={true}
                    />
                </FormGroup>
                <div className='mb-2'>Date of Matriculation:</div>
                <DateField
                  dayId='matriculationDay'
                  monthId='matriculationMonth'
                  yearId='matriculationYear'
                  dayName='matriculationDay'
                  monthName='matriculationMonth'
                  yearName='matriculationYear'
                  dayValue={this.state.matriculationDay}
                  monthValue={this.state.matriculationMonth-1}
                  yearValue={this.state.matriculationYear}
                  maxYear={this.maxYear}
                  minYear={this.minYear}
                  onChange={this.onChangeFields}
                  onMonthSelect={this.onMonthSelect}
                  required={true}
                />
                <TextField 
                  id='courseCode' 
                  name='courseCode'
                  labelText='Course code:' 
                  value={this.state.courseCode} 
                  onChange={this.onChangeFields}
                  placeholder='Es. 0124'
                  required={true}
                />
                <FormGroup>
                    <label htmlFor='studentPassword'>Password:</label>
                    <PasswordField
                      id='studentPassword' 
                      name='studentPassword' 
                      value={this.state.studentPassword} 
                      onChange={this.onChangeFields}
                      placeholder='Enter password'
                      required={true}
                    />
                </FormGroup>
                <Button colorClass='btn-success' type='submit' isDisabled={!isDisabled}>{`Upload the student ${this.state.firstName} ${this.state.lastName}`}</Button>
            </form>
        );
    }
}

//export a component
export default StudentForm;