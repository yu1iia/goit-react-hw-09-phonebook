import React, { lazy, Suspense, useEffect, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';

import AppBar from './Components/AppBar/AppBar';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import './App.module.css';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

export default function App() {
  // Global state
  const dispatch = useDispatch();
  const onGetCurrentUser = useCallback(
    () => dispatch(authOperations.getCurrentUser()),
    [dispatch],
  );

  // Get current user
  useEffect(() => onGetCurrentUser(), [onGetCurrentUser]);

  return (
    <>
      <AppBar />
      <Suspense
        fallback={
          <Loader
            type="Bars"
            color="#rgba(137, 145, 135, 0.94)"
            height={80}
            width={80}
          />
        }
      >
        <Switch>
          <PublicRoute
            path="/register"
            redirectTo="/contacts"
            restricted
            component={RegisterView}
          />
          <PublicRoute
            path="/login"
            redirectTo="/contacts"
            restricted
            component={LoginView}
          />
          <PrivateRoute
            path="/contacts"
            redirectTo="/login"
            component={ContactsView}
          />
          <Route path="/" component={HomeView} />
        </Switch>
      </Suspense>
    </>
  );
}
