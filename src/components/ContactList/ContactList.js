import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  contactOperations,
  contactsSelectors,
} from '../../redux/contacts/index';

import styles from './ContactList.module.css';

import Loading from '../Loader';

export default function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactOperations.fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(contactsSelectors.getLoading);
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const onDeleteContact = id => dispatch(contactOperations.deleteContact(id));

  return (
    <div>
      {isLoading && <Loading />}
      <ul className={styles.contactList}>
        {contacts.length ? (
          contacts.map(({ id, name, number }) => (
            <li className={styles.contactItem} key={id}>
              {name} : {number}
              <button
                type="button"
                className={styles.button}
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <li className={styles.notification}>No contact found</li>
        )}
      </ul>
    </div>
  );
}
