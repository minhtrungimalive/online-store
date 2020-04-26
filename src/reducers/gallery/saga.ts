import { put, takeLatest, select } from 'redux-saga/effects';
import {
  GET_IMAGE_GALLERY_REQUEST,
  GET_IMAGE_GALLERY_FAILED,
  GET_IMAGE_GALLERY_SUCCESS,
  ADD_IMAGE_TO_CART_REQUEST,
  ADD_IMAGE_TO_CART_SUCCESS,
  REMOVE_IMAGE_FROM_CART_REQUEST,
  REMOVE_IMAGE_FROM_CART_SUCCESS,
  SAVE_REF_SUCCESS,
  SAVE_REF_REQUEST,
  GET_IMAGE_FROM_CART_REQUEST,
  GET_IMAGE_FROM_CART_SUCCESS,
  CHECK_DETAIL_PAGE_SUCCESS,
  CHECK_DETAIL_PAGE_REQUEST,
  CHECK_OPEN_NAV_REQUEST,
  CHECK_OPEN_NAV_SUCCESS,
} from './action';
import { getImageGalleryMock } from '../../mock-api';
import { ActionBase } from '..';
import { getGalleryState } from './selector';
import { GalleryState, ImageSource } from './model';
import { checkExistingKey, PHOTO_CART_KEY, getDataLocalByKey, setDataLocalByKey } from '../../utils/localstore';

function* implementGetImageSource() {
  const { data, error } = yield getImageGalleryMock();
  if (data) {
    yield put({ type: GET_IMAGE_GALLERY_SUCCESS, payload: data });
  } else if (error) {
    yield put({ type: GET_IMAGE_GALLERY_FAILED, payload: error });
  }
}

function* implementAddImageToCart(action: ActionBase) {
  let dataPush: ImageSource[] = [];
  const itemPush: ImageSource = action.payload;
  if (checkExistingKey(PHOTO_CART_KEY)) {
    dataPush = JSON.parse(getDataLocalByKey(PHOTO_CART_KEY));
    const indexFound = dataPush.findIndex(v => v.id === itemPush.id);
    if (indexFound <= -1) {
      dataPush.push(itemPush);
    }
  } else {
    dataPush.push(itemPush);
  }
  setDataLocalByKey(PHOTO_CART_KEY, JSON.stringify(dataPush));
  yield put({ type: ADD_IMAGE_TO_CART_SUCCESS, payload: dataPush });
}

function* implementGetImageFromCart() {
  let dataPush: ImageSource[] = [];
  if (checkExistingKey(PHOTO_CART_KEY)) {
    dataPush = JSON.parse(getDataLocalByKey(PHOTO_CART_KEY));
  }
  yield put({ type: GET_IMAGE_FROM_CART_SUCCESS, payload: dataPush });
}

function* implementRemoveImageFromCart(action: ActionBase) {
  let dataPush: ImageSource[] = [];
  const idRemoved = action.payload;
  if (checkExistingKey(PHOTO_CART_KEY)) {
    dataPush = JSON.parse(getDataLocalByKey(PHOTO_CART_KEY));
    const indexFound = dataPush.findIndex(v => v.id === idRemoved);
    if (indexFound > -1) {
      dataPush.splice(indexFound, 1);
    }
  }
  setDataLocalByKey(PHOTO_CART_KEY, JSON.stringify(dataPush));
  yield put({ type: REMOVE_IMAGE_FROM_CART_SUCCESS, payload: dataPush });
}

function* implementIsOpenNav(action: ActionBase) {
  const isOpenNav = action.payload;

  yield put({ type: CHECK_OPEN_NAV_SUCCESS, payload: !!isOpenNav });
}

function* implementIsDetailPage(action: ActionBase) {
  const isSlider = action.payload;

  yield put({ type: CHECK_DETAIL_PAGE_SUCCESS, payload: !!isSlider });
}

function* implementSaveRef(action: ActionBase) {
  const galleryState: GalleryState = yield select(getGalleryState);
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

function* gallerySaga() {
  yield takeLatest(GET_IMAGE_GALLERY_REQUEST, implementGetImageSource);
  yield takeLatest(ADD_IMAGE_TO_CART_REQUEST, implementAddImageToCart);
  yield takeLatest(GET_IMAGE_FROM_CART_REQUEST, implementGetImageFromCart);
  yield takeLatest(REMOVE_IMAGE_FROM_CART_REQUEST, implementRemoveImageFromCart);
  yield takeLatest(SAVE_REF_REQUEST, implementSaveRef);
  yield takeLatest(CHECK_DETAIL_PAGE_REQUEST, implementIsDetailPage);
  yield takeLatest(CHECK_OPEN_NAV_REQUEST, implementIsOpenNav);
}

export default gallerySaga;
