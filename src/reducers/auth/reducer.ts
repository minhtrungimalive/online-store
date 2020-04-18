import { GET_AUTH_REQUEST, GET_AUTH_FAILED, GET_AUTH_SUCCESS } from './action';
import { ActionBase } from '..';
import { AuthState } from './model';

const initialState: AuthState = {
  loading: false,
  errors: {},
  isAuthenticated: false,
};

const authReducer = (state = initialState, action: ActionBase): AuthState => {
  switch (action.type) {
    case GET_AUTH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_AUTH_FAILED:
      return {
        ...state,
        loading: false,
        errors: {
          msg: 'Not authenticated',
          code: 401,
        },
      };
    case GET_AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      };

    default: {
      return state;
    }
  }
};

export default authReducer;
