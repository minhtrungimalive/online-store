import { put, takeLatest, select } from 'redux-saga/effects';
import {
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_FROM_CART_SUCCESS,
  GET_PRODUCT_LIST_FAILED,
  ADD_PRODUCT_TO_CART_REQUEST,
  ADD_PRODUCT_TO_CART_SUCCESS,
  REMOVE_PRODUCT_FROM_CART_REQUEST,
  REMOVE_PRODUCT_FROM_CART_SUCCESS,
  GET_PRODUCT_FROM_CART_REQUEST,
  GET_PRODUCT_LIST_SUCCCESS,
  SAVE_REF_SUCCESS,
  SAVE_REF_REQUEST,
} from './action';

import { getProductList } from '../../mock-api';
import { ActionBase } from '..';
import { getProductState } from './selector';
import { ProductSource, ProductState } from './model';
import { checkExistingKey, PRODUCT_LIST_CART_KEY, getDataLocalByKey, setDataLocalByKey } from '../../utils/localstore';

function* implementGetProductSource() {
  const { data, error } = yield getProductList();
  if (data) {
    yield put({ type: GET_PRODUCT_LIST_SUCCCESS, payload: data });
  } else if (error) {
    yield put({ type: GET_PRODUCT_LIST_FAILED, payload: error });
  }
}

function* implementAddProductToCart(action: ActionBase) {
  let dataPush: ProductSource[] = [];
  const itemPush: ProductSource = action.payload;
  if (checkExistingKey(PRODUCT_LIST_CART_KEY)) {
    dataPush = JSON.parse(getDataLocalByKey(PRODUCT_LIST_CART_KEY));
    const indexFound = dataPush.findIndex(v => v.id === itemPush.id);
    if (indexFound <= -1) {
      dataPush.push(itemPush);
    }
  } else {
    dataPush.push(itemPush);
  }
  setDataLocalByKey(PRODUCT_LIST_CART_KEY, JSON.stringify(dataPush));
  yield put({ type: ADD_PRODUCT_TO_CART_SUCCESS, payload: dataPush });
}

function* implementGetProductFromCart() {
  let dataPush: ProductSource[] = [];
  if (checkExistingKey(PRODUCT_LIST_CART_KEY)) {
    dataPush = JSON.parse(getDataLocalByKey(PRODUCT_LIST_CART_KEY));
  }
  yield put({ type: GET_PRODUCT_FROM_CART_SUCCESS, payload: dataPush });
}

function* implementRemoveProductFromCart(action: ActionBase) {
  let dataPush: ProductSource[] = [];
  const idRemoved = action.payload;
  if (checkExistingKey(PRODUCT_LIST_CART_KEY)) {
    dataPush = JSON.parse(getDataLocalByKey(PRODUCT_LIST_CART_KEY));
    const indexFound = dataPush.findIndex(v => v.id === idRemoved);
    if (indexFound > -1) {
      dataPush.slice(indexFound, 1);
    }
  }
  setDataLocalByKey(PRODUCT_LIST_CART_KEY, JSON.stringify(dataPush));
  yield put({ type: REMOVE_PRODUCT_FROM_CART_SUCCESS, payload: dataPush });
}

function* implementSaveRef(action: ActionBase) {
  const galleryState: ProductState = yield select(getProductState);
  const keyRefs = Object.keys(galleryState.refs);
  const indexFound = keyRefs.findIndex(v => v === action.payload.name);
  if (indexFound <= -1) {
    const refTemp = { ...galleryState.refs };
    refTemp[`${action.payload.name}`] = action.payload.ref;
    yield put({
      type: SAVE_REF_SUCCESS,
      payload: refTemp,
    });
  }
}

function* productSaga() {
  yield takeLatest(GET_PRODUCT_LIST_REQUEST, implementGetProductSource);
  yield takeLatest(ADD_PRODUCT_TO_CART_REQUEST, implementAddProductToCart);
  yield takeLatest(REMOVE_PRODUCT_FROM_CART_REQUEST, implementRemoveProductFromCart);
  yield takeLatest(GET_PRODUCT_FROM_CART_REQUEST, implementGetProductFromCart);
  yield takeLatest(SAVE_REF_REQUEST, implementSaveRef);
}

export default productSaga;
