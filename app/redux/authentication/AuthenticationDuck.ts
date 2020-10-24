import { Action } from 'redux';
import AuthenticationState from './AuthenticationState';
import { Authentication } from '../ActionsTypes';

// STATE
const initialState: AuthenticationState = {
  mail: '',
  token: '',
};

// ACTIONS
export const authenticationSaveMail = (mail: string) => ({
  type: Authentication.saveMail,
  mail,
});

export const authenticationSaveToken = (token: string) => ({
  type: Authentication.saveToken,
  token,
});

// REDUCER
export default function authenticationReducer(
  state: AuthenticationState = initialState,
  action: any
) {
  switch (action.type) {
    case Authentication.saveMail:
      return { ...state, mail: action.mail };

    case Authentication.saveToken:
      return { ...state, token: action.token };

    default: {
      return state;
    }
  }
}
