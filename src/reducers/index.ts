import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import authReducer from './auth/reducer';
import galleryReducer from './gallery/reducer';
import { AuthState } from './auth/model';
import authSaga from './auth/saga';
import gallerySaga from './gallery/saga';
import productReducer from './product/reducer';
import { GalleryState } from './gallery/model';
import { ProductState } from './product/model';
import productSaga from './product/saga';

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
  productReducer: ProductState;
}

const rootReducer = combineReducers<RootState, ActionBase>({
  authReducer,
  galleryReducer,
  productReducer,
});

function* rootSaga() {
  yield all([fork(authSaga), fork(gallerySaga), fork(productSaga)]);
}

export { rootReducer, rootSaga };
