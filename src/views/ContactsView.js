import React, { Component } from 'react';
// import { CSSTransition } from 'react-transition-group';

// import ContactsForm from '../Components/Contacts/Contacts';
import ContactsFormList from '../Components/ContactsFormList/ContactsFormList';
// import Filter from '../Components/Filter/Filter';

import s from '../App.module.css';
import Alert from '../Components/Alert/Alert';

export default class ContactsView extends Component {
  render() {
    return (
      <div className={s.contacts}>
        {this.props.alert && <Alert alert={alert} />}

        <h2 className={s.contactListTitle}>Contacts</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="Name" className={s.form_label}>
            Name
            <input
              className={s.form_input}
              type="text"
              onChange={this.handleChange}
              name="name"
            />
          </label>

          <label className={s.form_label}>
            Number:
            <input
              className={s.form_label}
              type="text"
              onChange={this.handleChange}
              name="number"
            />
          </label>

          <button type="submit" className={s.addButton}>
            {' '}
            Add contact
          </button>
        </form>
        <ContactsFormList />
      </div>
    );
  }
}
// <>
//   <CSSTransition
//     in={true}
//     appear={true}
//     timeout={500}
//     classNames="Logo-slider"
//   >
//     <h1 className="App-logo">Phonebook</h1>
//   </CSSTransition>
//   <ContactForm />
//   <h2 className={s.contactListTitle}>Contacts</h2>
//   <Filter />
//   <ContactList />
// </>
