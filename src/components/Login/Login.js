import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

import styles from './Login.module.css';

export default function LoginView() {
  const [user, setUser] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const handleChange = useCallback(
    ({ target: { name, value } }) => {
      setUser({ ...user, [name]: value.trim() });
    },
    [user],
  );

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      dispatch(authOperations.logIn(user));

      setUser({ email: '', password: '' });
    },
    [dispatch, user],
  );

  return (
    <div className={styles.loginForm}>
      <h1>Log in page</h1>

      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <label className={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>

        <label className={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={styles.loginButton}>
          Login
        </button>
      </form>
    </div>
  );
}
