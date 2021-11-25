import {
  ADD_CONTACT_FAILED,
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_SUCCESS,
  FETCH_CONTACTS_FAILED,
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
} from "./contactActionType";
import contactService from "../../services/contactService";

const fetchContactsRequest = () => {
  return {
    type: FETCH_CONTACTS_REQUEST,
  };
};

const fetchContactsSuccess = (data) => {
  return {
    payload: data,
    type: FETCH_CONTACTS_SUCCESS,
  };
};

const fetchContactsFailed = (error) => {
  return {
    error: error,
    type: FETCH_CONTACTS_FAILED,
  };
};

const addContactRequest = () => {
  return {
    type: ADD_CONTACT_REQUEST,
  };
};

const addContactSuccess = () => {
  return {
    type: ADD_CONTACT_SUCCESS,
  };
};

const addContactFailed = (error) => {
  return {
    error: error,
    type: ADD_CONTACT_FAILED,
  };
};

export const addContact = (contact) => {
  return async (dispatch) => {
    dispatch(addContactRequest());
    try {
      await contactService.addContact(contact);
      dispatch(addContactSuccess());
    } catch (error) {
      dispatch(addContactFailed(error));
    }
  };
};

export const fetchContacts = () => {
  return async (dispatch) => {
    dispatch(fetchContactsRequest());
    try {
      const data = await contactService.getAllContacts();
      dispatch(fetchContactsSuccess(data));
    } catch (error) {
      console.error(error);
      dispatch(fetchContactsFailed(error));
    }
  };
};
