import React from 'react';
import PropTypes from 'prop-types';

const ContactList = (contacts, onDeleteContact) => (
  <ul>
    {contacts.map(({id, name, number}) => (
      <li key={id}>
       <span>{name}:</span>
       <span>{number}</span>
       <button
       name="button"
       onClick={onDeleteContact(id)}
       >
         Delete
       </button>
      </li>
      
    ))}
  </ul>
)

ContactList.propTypes = {
  contacts: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};


export default ContactList;