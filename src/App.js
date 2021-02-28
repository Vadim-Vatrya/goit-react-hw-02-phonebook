import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';


import ContactForm from './components/ContactForm/ContactForm';


class App extends Component {
  state = {
    contacts: [],
  };

  addContact = ({name, number}) => {
    const {contacts} = this.state;

    if (name === '') {
      alert(`Enter your name`)
    };

    
    if (number === '') {
      alert(`Enter your number`)
    };

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`)
    };

    const newContact = {
      id: uuidv4,
      name,
      number,
    }

    this.setState(({contacts}) => ({contacts: [newContact, ...contacts]}))

  }


  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact}/>
        <h2>Contacts</h2>
        <Filter />
      </div>
    );
  }
}

export default App;
