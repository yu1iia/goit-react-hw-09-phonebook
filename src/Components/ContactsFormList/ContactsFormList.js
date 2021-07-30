import React, { useEffect, useCallback } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';

import operations from '../../redux/contacts/contacts-operations';

import ContactItem from '../ContactsFormListItem/ContactsFormListItem';
import styles from './ContactsFormList.module.css';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';

export default function ContactList() {
  const contacts = useSelector(getFilteredContacts);

  // Contacts fetch
  const dispatch = useDispatch();
  const onFetchContacts = useCallback(
    () => dispatch(operations.fetchContacts()),
    [dispatch],
  );

  useEffect(() => onFetchContacts(), [onFetchContacts]);
  

  return (
    <>
      <TransitionGroup component="ul" className={styles.contact__List}>
        {contacts.map(i => {
          return (
            <CSSTransition key={i.id} timeout={250} classNames={styles}>
              <ContactItem id={i.id} name={i.name} number={i.number} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </>
  );
}
