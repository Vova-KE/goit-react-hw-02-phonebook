import React, { Component } from "react";
import { nanoid } from 'nanoid';
import Filter from "./Filter";
import styles from './styles.module.css';
import ContactList from "./ContactList";

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: '',
    number: '',
    filter: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();
  // numberFilterId = nanoid();

  // handleInputChange = (event) => {
  //   this.setState({ name: event.currentTarget.value })
  // };

  // handleNumberChange = (event) => {
  //   this.setState({ number: event.currentTarget.value })
  // };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    const contactItem = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contactItem]
    }))

    this.reset();
  };

  reset = () => {
    this.setState({ name: '' })
    this.setState({ number: '' })
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value })
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const foundContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));

    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId} className={styles.label}>Name
            <input className={styles.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
              // onChange={this.handleInputChange}
              id={this.nameInputId}
            />
          </label>
          <label htmlFor={this.numberInputId} className={styles.label}>Number
            <input className={styles.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleChange}
              // onChange={this.handleNumberChange}
              id={this.numberInputId}
            />
          </label>
          <button type="submit" className={styles.button}>Add contact</button>
          {/* <p className={styles.list}>Contacts</p> */}
          <h2>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.changeFilter}/>
          {/* <label htmlFor={this.numberFilterId} className={styles.label__filter}>Find contacts by name
            <input className={styles.input}
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={this.changeFilter}
            id={this.numberFilterId}
            />
          </label> */}
          <ContactList foundContacts={foundContacts} />
          {/* <ul>
            {foundContacts.map(contact => (
              <li className={styles.list__item} key={nanoid()}>
                {contact.name}: {contact.tel}
              </li>
            ))}
          </ul> */}
        </form>
      </div>
    );
  };
};

export default App;