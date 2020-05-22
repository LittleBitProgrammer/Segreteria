//import lib
import React from 'react';
import Card from './card/Card';
import CardImage from './card/CardImage';
import CardBody from './card/CardBody';
import CardTitle from './card/CardTitle';
import CardText from './card/CardText';
import Row from './bootstrap/Row';
import SubSectionTitle from './subSectionTitle';
import ContactList from './ContactList';
import userLogo from '../img/user.png';
import callLogo from '../img/call.png';
import emailLogo from '../img/email.png';
import '../css/Student.css'

const populateContacts = (user,obj) => {
    user.contatti.forEach((contatto) => {
      if (contatto.tipo_contatto === "telefono") {
        obj.telephone_numbers.push(contatto.valore_contatto);
      } else {
        obj.emails.push(contatto.valore_contatto);
      }
    });
  };

//create a component
const StudentCardList = ({students}) => {
    if (!students) {
        return <div>Loading...</div>;
    }
    const studentList = students.map((user) =>{

        const contacts = {
            telephone_numbers: [],
            emails: []
        }

        populateContacts(user,contacts);

        return (
            <Card key={user.matricola_studente} className='mx-auto'>
                <CardImage image={userLogo} altText='user logo'/>
                <CardBody>
                    <CardTitle>{`${user.nome} ${user.cognome}`}</CardTitle>
                    <CardText>{`Anno in corso: ${user.anno_in_corso}`}</CardText>
                    <CardText>Codice Fiscale: <span className='text-primary'>{user.cf.toUpperCase()}</span></CardText>
                    <CardText>Data di immatricolazione: {user.data_immatricolazione}</CardText>
                    <CardText>Matricola studente: {user.matricola_studente}</CardText>
                    <CardText>Email studente: <span className='text-primary'>{user.email_studente}</span></CardText>
                    <CardText>Data di nascita: {user.data_di_nascita}</CardText>
                    <CardText>Domicilio: {`via ${user.via_piazza} N°${user.civico}, ${user.cap}`}</CardText>
                    <CardText>Luogo di nascita: {user.luogo_di_nascita}</CardText>
                        <Row className='justify-content-start'>
                            <div className='col-6'>
                                <SubSectionTitle 
                                logo={callLogo}
                                title='Telefono'
                                altText='telephone of the student'
                                className='mb-1 mr-2'
                                style={{maxWidth: '20px', height: 'auto'}}
                                />
                                <ContactList contacts={contacts.telephone_numbers}/>
                            </div>
                            <div className='col-6'>
                                <SubSectionTitle 
                                logo={emailLogo}
                                title='Email'
                                altText='email of the student'
                                className='mb-1 mr-2'
                                style={{maxWidth: '20px', height: 'auto'}}
                                />
                                <ContactList contacts={contacts.emails}/>
                            </div>
                        </Row>
                </CardBody>
            </Card>
        );
    });
    return (<div>{studentList}</div>);
}

//export a component
export default StudentCardList;