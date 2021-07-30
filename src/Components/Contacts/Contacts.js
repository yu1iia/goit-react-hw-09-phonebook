import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/contacts/contacts-operations';
import Message from '../Alert/Alert';
import styles from './Contacts.module.css';
import { getContacts } from '../../redux/contacts/contacts-selectors';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [errorActive, setErrorActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();
  const onCreateContacts = (name, number) =>
    dispatch(operations.createContact(name, number));

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`Тип поля name - ${name} не обрабатывается!`);
    }
  };

  // Error message
  const messageAppearing = message => {
    setErrorMessage(message);
    setErrorActive(true);
  };

  // Empty fields check
  const isFieldEmpty = name => {
    if (name === '') {
      messageAppearing('All fields must be completed');
      return true;
    }
  };
  // Form reset
  const reset = () => {
    setName('');
    setNumber('');
  };

  // Add new contact
  const handleAddContacts = e => {
    e.preventDefault();
    if (isFieldEmpty(name) || isFieldEmpty(number)) {
      return;
    }
    const namesArray = contacts.map(c => c.name.toLowerCase());
    if (namesArray.includes(name.toLowerCase())) {
      const i = namesArray.indexOf(name.toLowerCase());
      messageAppearing(`"${contacts[i].name}" is already in contacts`);
      reset();
      return;
    }
    onCreateContacts(name, number);
    reset();
  };

  // Error remove
  const resetError = () => {
    setTimeout(() => {
      setErrorActive(false);
    }, 2000);
  };

  return (
    <>
      <CSSTransition
        in={errorActive}
        timeout={2000}
        classNames={styles}
        unmountOnExit
        onEnter={resetError}
        onExited={() => setErrorMessage('')}
      >
        <Message message={errorMessage} />
      </CSSTransition>
      <form>
        <label>
          Name
          <input name="name" type="text" value={name} onChange={handleChange} />
        </label>
        <label>
          Number
          <input
            name="number"
            type="tel"
            value={number}
            onChange={handleChange}
          />
        </label>
        <button type="submit" onClick={handleAddContacts}>
          Add contact
        </button>
      </form>
    </>
  );
}
