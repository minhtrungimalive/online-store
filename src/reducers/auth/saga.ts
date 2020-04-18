import { put, takeLatest } from 'redux-saga/effects';
import { GET_AUTH_REQUEST, GET_AUTH_FAILED, GET_AUTH_SUCCESS } from './action';
import { ActionBase } from '..';
import { apiGetAuthMock } from '../../services/auth';

function* implementGetAuth(action: ActionBase) {
  const { data, error } = yield apiGetAuthMock(action.payload);
  if (data) {
    yield put({ type: GET_AUTH_SUCCESS, payload: data });
  } else if (error) {
    yield put({ type: GET_AUTH_FAILED, payload: error });
  }
}

function* authSaga() {
  yield takeLatest(GET_AUTH_REQUEST, implementGetAuth);
}

export default authSaga;
