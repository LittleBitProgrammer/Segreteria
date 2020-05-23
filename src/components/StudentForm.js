// import lib
import React from 'react';
import FormGroup from './bootstrap/FormGroup';
import FormRow from './bootstrap/FormRow';
import myUniversity from '../api/myUnivesity';

//create a component
class StudentForm extends React.Component{
    constructor(props){
        super(props);

        this.maxYear = 2003;
        this.minYear = 1910;
        this.monthList = ["January", "February", "March", "April", "May", "June",
                          "July", "August", "September", "October", "November", "December"];

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

    onMonthSelect = (event) => {
        this.setState({[event.target.name]: (this.monthList.indexOf(event.target.value) + 1)})
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

    days = () => {
        const arr = [];
        for (let index = 1; index < 31; index++) {
            arr.push(<option key={index} value={index}>{index}</option>)
        }

        return arr;
    }

    months = () => {
        let monthList = [];

        monthList = this.monthList.map((month) => {
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
                          value={this.monthList[this.state.bMonth-1]} 
                          onChange={this.onMonthSelect} 
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
                <FormGroup>
                    <label htmlFor='birthPlace'>Birth place:</label>
                    <input 
                      className='form-control'
                      type='text' 
                      id='birthPlace' 
                      name='birthPlace' 
                      value={this.state.birthPlace} 
                      onChange={this.onChangeFields}
                      placeholder='Es. Naples'
                      required
                      />
                </FormGroup>
                <div className='mb-2'>Domicile:</div>
                <FormRow>
                    <FormGroup className='col-6'>
                        <input 
                          className='form-control'
                          type='text' 
                          id='address' 
                          name='address' 
                          value={this.state.address} 
                          onChange={this.onChangeFields}
                          placeholder='Es. Via Leopardi'
                          required
                        />
                    </FormGroup>
                    <FormGroup className='col-3'>
                        <input 
                          className='form-control'
                          type='text' 
                          id='addressNumber' 
                          name='addressNumber' 
                          value={this.state.addressNumber} 
                          onChange={this.onChangeFields}
                          placeholder='Es. 5'
                          required
                        />
                    </FormGroup>
                    <FormGroup className='col-3'>
                        <input 
                          className='form-control'
                          type='text' 
                          id='cap' 
                          name='cap' 
                          value={this.state.cap} 
                          onChange={this.onChangeFields}
                          placeholder='Es. 8012'
                          required
                        />
                    </FormGroup>
                </FormRow>
                <FormGroup>
                    <label htmlFor='freshman'>Freshman:</label>
                    <input 
                      className='form-control'
                      type='text' 
                      id='freshman' 
                      name='freshman' 
                      value={this.state.freshman} 
                      onChange={this.onChangeFields}
                      placeholder='Es. 0124001871'
                      required
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor='studentEmail'>University Email:</label>
                    <input 
                      className='form-control'
                      type='text' 
                      id='studentEmail' 
                      name='studentEmail' 
                      value={this.state.studentEmail} 
                      onChange={this.onChangeFields}
                      placeholder='Es. name.surname001@studenti.uniparthenope.it'
                      required
                    />
                </FormGroup>
                <div className='mb-2'>Date of Matriculation:</div>
                <FormRow>
                    <FormGroup className='col-4'>
                        <select 
                          id='matriculationDay' 
                          name='matriculationDay'
                          className='form-control' 
                          value={this.state.matriculationDay}
                          onChange={this.onChangeFields} 
                          required>
                            <option value='DEFAULT' disabled>Day</option>
                            {this.days()}
                        </select>
                    </FormGroup>
                    <FormGroup className='col-4'>
                        <select 
                          id='matriculationMonth' 
                          name='matriculationMonth'
                          className='form-control' 
                          value={this.monthList[this.state.matriculationMonth-1]} 
                          onChange={this.onMonthSelect} 
                          required>
                            <option value='DEFAULT' disabled>Month</option>
                            {this.months()}
                        </select>
                    </FormGroup>
                    <FormGroup className='col-4'>
                        <select 
                          id='matriculationYear' 
                          name='matriculationYear' 
                          className='form-control' 
                          value={this.state.matriculationYear} 
                          onChange={this.onChangeFields}  
                          required>
                            <option value='DEFAULT' disabled>Year</option>
                            {this.years()}
                        </select>
                    </FormGroup>
                </FormRow>
                <FormGroup>
                    <label htmlFor='courseCode'>Course code:</label>
                    <input 
                      className='form-control'
                      type='text' 
                      id='courseCode' 
                      name='courseCode' 
                      value={this.state.courseCode} 
                      onChange={this.onChangeFields}
                      placeholder='Es. 0124'
                      required
                      />
                </FormGroup>
                <FormGroup>
                    <label htmlFor='studentPassword'>Password:</label>
                    <input 
                      className='form-control'
                      type='password' 
                      id='studentPassword' 
                      name='studentPassword' 
                      value={this.state.studentPassword} 
                      onChange={this.onChangeFields}
                      placeholder='Enter password'
                      required
                      />
                </FormGroup>
                <button disabled={!isDisabled} className='btn btn-primary' type='submit'>Upload Student</button>
            </form>
        );
    }
}

//export a component
export default StudentForm;