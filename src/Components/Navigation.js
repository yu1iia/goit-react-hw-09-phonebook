import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthSelectors from '../redux/auth/auth-selectors';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    fontFamily: 'arial',

    color: '#2A363B',
  },
  activeLink: {
    color: '#rgb(88, 102, 179)',
  },
};

export default function Navigation() {
  const isAuthenticated = useSelector(AuthSelectors.getIsAuthenticated);

  return (
    <nav>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink
          to="/contacts"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
