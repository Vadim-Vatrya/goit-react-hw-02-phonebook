import React, { Component } from 'react';

import { v4 as uuidv4 } from 'uuid';
import Button from '../Button/Button'

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

handleChange = event => {
  const {name, value} = event.currentTarget;
  this.setState({[name]: value});
}

  handleSubmit = event  => {
    const {name, number} = this.state;
    event.preventDefault();
    this.props.onSubmit(name, number);
    this.reset()
  }

  reset () {
    this.setState({
      name: '',
      number: '',
    });
  }


  contactNameId = uuidv4();
  contactNumberId = uuidv4();

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.contactNameId}>
          Name
          <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          id ={this.contactNameId}
          />
        </label>
        <label htmlFor={this.contactNumberId}>
          Number
          <input
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          id={this.contactNumberId}
          />
        </label>
        <Button />
      </form>
      
    )
  }
}

export default ContactForm;
