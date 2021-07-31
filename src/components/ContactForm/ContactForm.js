import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  contactOperations,
  contactsSelectors,
} from '../../redux/contacts/index';

import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [newContact, setNewContact] = useState({ name: '', number: '' });

  const allContacts = useSelector(contactsSelectors.getAllContacts);

  const dispatch = useDispatch();

  const handleChange = useCallback(
    ({ target: { name, value } }) => {
      setNewContact({ ...newContact, [name]: value });
    },
    [newContact],
  );

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      if (!newContact.name) {
        return;
      }

      const existingContact = allContacts.find(
        contact => contact.name === newContact.name,
      );

      if (existingContact) {
        alert(`${existingContact.name} is already in contacts.`);
        return;
      }
      dispatch(contactOperations.addContact(newContact));

      setNewContact({ name: '', number: '' });
    },
    [allContacts, dispatch, newContact],
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={newContact.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Number
        <input
          type="text"
          name="number"
          value={newContact.number}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
}
