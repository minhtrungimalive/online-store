import { ActionBase } from '..';
import { AuthParam } from './model';

const BASE_ACTION = '@auth';

// Auth mock
const GET_AUTH_REQUEST = `${BASE_ACTION}/GET_AUTH_REQUEST`;
const GET_AUTH_FAILED = `${BASE_ACTION}/GET_AUTH_FAILED`;
const GET_AUTH_SUCCESS = `${BASE_ACTION}/GET_AUTH_SUCCESS`;

const getAuthentication = (payload?: AuthParam): ActionBase => ({
  type: GET_AUTH_REQUEST,
  payload,
});

export {
  // Export for action type
  GET_AUTH_REQUEST,
  GET_AUTH_FAILED,
  GET_AUTH_SUCCESS,
  // Export for action request
  getAuthentication,
};
