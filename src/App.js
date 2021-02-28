import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';


import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/Filter/Filter'



class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
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

  changeFilter = ({target}) => {
    const {value} = target;
    this.setState({filter: value})
  }

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  }

  filterContacts = () => {
    const {filter, contacts} = this.state;
    const searchName = filter.toLowerCase();
    return contacts.filter(({name}) =>
     name.toLowerCase().includes(searchName),)

  }



  render() {
    const {filter} = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact}/>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList 
        onDeleteContact={this.deleteContact}
        filterContacts= {this.filterContacts}/>
      </div>
      
    );
  }
}

export default App;
