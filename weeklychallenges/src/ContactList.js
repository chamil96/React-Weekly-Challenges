import React from 'react';
import Contact from './Contact';
// HARD: Using an array of contacts, loop through each one and create a new Contact component for each

function ContactList(){

  const theData = [
    {
      firstName: 'Victoria',
      lastName: 'Echevarria',
      phoneNumber: '704-999-9999'
    },

    {
      firstName: 'Mailk',
      lastName: 'Robinson',
      phoneNumber:'999-999-9407'
    },

    {
      firstName: 'Miguel',
      lastName: 'Rosas',
      phoneNumber: '999-704-9999'
    }
  ];

  const contactArray = theData.map(function(contact, i){
    const { firstName, lastName, phoneNumber } = contact;
    return (<li key={i}><Contact firstName={firstName} lastName={lastName} phoneNumber={phoneNumber}/></li>);
  });

  return(
    <ul className="contact-sentence">{contactArray}</ul>
  )
}
export default ContactList; 
