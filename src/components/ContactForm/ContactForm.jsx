import { Component } from 'react';
import s from './ContactForm.module.css';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
    state = {
      name: '',
      number: '',
    };
  
    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({
        [name]: value,
      });
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
  
      this.props.onAddContact({ ...this.state });
  
      this.setState({ name: '', number: '' });
    };

    render() {
        return (
          <form className={s.form} onSubmit={this.handleSubmit}>
            <label className={s.label}>
              Name
              <input
                className={s.inputName}
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <label className={s.label}>
              Number
              <input
                className={s.inputNumber}
                type="text"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
              />
            </label>
            <button className={s.btn} type="submit">
              Add contact
            </button>
          </form>
        );
      }
    }
    
    ContactForm.propTypes = {
      onAddContact: PropTypes.func.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    };