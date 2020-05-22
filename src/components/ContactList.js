//import lib
import React from 'react';

//create a component
const ContactList = ({contacts}) => {
    if (!contacts){
        return <div>Loading...</div>;
    }

    let i = 0;

    const listOfContacts = contacts.map((contact) => {
        i++;
        return (
            <ul key={i}>
                <li>{contact}</li>
            </ul>
        );
    })

    return <div>{listOfContacts}</div>;
}

//export a component
export default ContactList;