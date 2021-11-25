import {
  ADD_CONTACT_FAILED,
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_SUCCESS,
  FETCH_CONTACTS_FAILED,
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
} from "./contactActionType";

const initialState = {
  loading: false,
  contacts: [],
  error: "",
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };
    case FETCH_CONTACTS_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case ADD_CONTACT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ADD_CONTACT_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
