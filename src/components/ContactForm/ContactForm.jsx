import { Component } from 'react';
import PropTypes from 'prop-types';



class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} >
        <label >
          Name
          <input
            type="text"
            value={name}
            name="name"
            
            placeholder=" "
            onChange={this.handleChange}
          />
        </label>
        <label >
          Number
          <input
            type="tel"
            value={number}
            name="number"
          
            placeholder=" "
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" >
          Add contact
        </button>
      </form>
    );
  }
}



ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;