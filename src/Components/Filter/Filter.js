import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactActions from '../../redux/contacts/contacts-actions';
import { contactsSelectors } from '../../redux/contacts/index';

import styles from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);

  const onChange = event =>
    dispatch(contactActions.changeFilter(event.target.value));

  return (
    <label className={styles.filter}>
      Find contacts by name{' '}
      <input type="text" filter={filter} onChange={onChange} />
    </label>
  );
}
