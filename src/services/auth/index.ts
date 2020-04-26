import { getAuthMock } from '../../mock-api';
import { AuthParam } from '../../reducers/auth/model';

export const apiGetAuthMock = (param?: AuthParam) => {
  return getAuthMock(param)
    .then(val => {
      return {
        data: val,
      };
    })
    .catch(error => {
      return {
        error,
      };
    });
};
