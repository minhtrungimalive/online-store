import { ErrorBase } from '..';

export interface AuthParam {
  isAuth?: boolean;
}

export interface AuthState {
  loading: boolean;
  errors: ErrorBase;
  isAuthenticated: boolean;
}
