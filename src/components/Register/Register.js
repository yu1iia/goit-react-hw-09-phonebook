import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

import styles from './Register.module.css';

export default function RegisterView() {
  const [newUser, setNewUser] = useState({ name: '', email: '', password: '' });

  const dispatch = useDispatch();

  const handleChange = useCallback(
    ({ target: { name, value } }) => {
      setNewUser({ ...newUser, [name]: value.trim() });
    },
    [newUser],
  );

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      dispatch(authOperations.register(newUser));

      setNewUser({ name: '', email: '', password: '' });
    },
    [dispatch, newUser],
  );

  return (
    <div className={styles.signupForm}>
      <h1>Sign up page</h1>

      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <label className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            value={newUser.name}
            onChange={handleChange}
          />
        </label>

        <label className={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleChange}
          />
        </label>

        <label className={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={newUser.password}
            onChange={handleChange}
          />
        </label>

        <button className={styles.signupButton} type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}
