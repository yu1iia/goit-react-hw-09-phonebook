import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth/index';
import PropTypes from 'prop-types';

import styles from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        HOME
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          CONTACTS
        </NavLink>
      )}
    </nav>
  );
}

Navigation.defaultProps = {
  isLoggedIn: false,
};

Navigation.propTypes = {
  isLoggedIn: PropTypes.bool,
};
