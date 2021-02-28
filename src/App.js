import React, { Component } from 'react';
import shortId from 'shortid';


import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList'



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
    if (!name || !number) return;

    const { contacts } = this.state;
    const contactNames = contacts.map(contact => contact.name.toLowerCase());
    if (contactNames.includes(name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const contact = {
      id: shortId.generate(),
      name,
      number,
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterContacts = () => {
    const {filter, contacts} = this.state;
    const searchName = filter.toLowerCase();
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(searchName),
    );
  }



  render() {

    const {filter} = this.state;
    const filteredContacts = this.filterContacts;
    
    
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact}/>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList 
         filterContacts= {filteredContacts}
        onDeleteContact={this.deleteContact}/>
       
      </div>
      
    );
  }
}

export default App;
