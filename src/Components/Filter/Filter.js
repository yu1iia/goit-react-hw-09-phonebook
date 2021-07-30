import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';

import s from './Filter.module.css';

export default function Filter() {
  // Глобальный стэйт
  // а. получение стэйта
  const value = useSelector(getFilter);
  // б. изменение стэйта
  const dispatch = useDispatch();
  const onChangeFiter = e => dispatch(actions.changeFilter(e.target.value));
  return (
    <>
      <label className={s.filter_label}>
        Find contacts by name
        <input
          className={s.filter_input}
          name="filter"
          type="text"
          value={value}
          onChange={onChangeFiter}
        />
      </label>
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFiter: PropTypes.func,
};
