import React, { Component } from 'react';
import PropTypes from 'prop-types';


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
    
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset()
  }

  reset () {
    this.setState({
      name: '',
      number: '',
     
    });
  }


  
  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label >
          Name
          <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
         
          />
        </label>
        <label >
          Number
          <input
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChange}
          
          />
        </label>
        <Button />
      </form>
      
    )
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
