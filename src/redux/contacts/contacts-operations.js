import axios from 'axios';

import actions from './contacts-actions';

const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(actions.fetchContactSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactError(error.message));
  }
};

const addContact = contact => async dispatch => {
  dispatch(actions.addContactRequest());
  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(actions.addContactSuccess(data));
  } catch (error) {
    dispatch(actions.addContactError(error.message));
  }
};

const deleteContact = contactId => async dispatch => {
  dispatch(actions.deleteContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(actions.deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(actions.deleteContactError(error.message));
  }
};

const contactsOperations = {
  addContact,
  deleteContact,
  fetchContacts,
};

export default contactsOperations;
