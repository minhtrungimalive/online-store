import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import authReducer from './auth/reducer';
import galleryReducer from './gallery/reducer';
import { AuthState } from './auth/model';
import authSaga from './auth/saga';
import gallerySaga from './gallery/saga';
import { GalleryState } from './gallery/model';

export interface ActionBase {
  type: string;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  payload: any;
}

export interface ErrorBase {
  msg?: string;
  code?: number;
}
// Using at the component when mapStateToProps
export interface RootState {
  authReducer: AuthState;
  galleryReducer: GalleryState;
}

const rootReducer = combineReducers<RootState, ActionBase>({
  authReducer,
  galleryReducer,
});

function* rootSaga() {
  yield all([fork(authSaga), fork(gallerySaga)]);
}

export { rootReducer, rootSaga };
