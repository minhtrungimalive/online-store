import { ActionBase } from '..';
import { ImageSource } from './model';

const BASE_ACTION = '@gallery';

const GET_IMAGE_GALLERY_REQUEST = `${BASE_ACTION}/GET_IMAGE_GALLERY_REQUEST`;
const GET_IMAGE_GALLERY_FAILED = `${BASE_ACTION}/GET_IMAGE_GALLERY_FAILED`;
const GET_IMAGE_GALLERY_SUCCESS = `${BASE_ACTION}/GET_IMAGE_GALLERY_SUCCESS`;

const ADD_IMAGE_TO_CART_REQUEST = `${BASE_ACTION}/ADD_IMAGE_TO_CART_REQUEST`;
const ADD_IMAGE_TO_CART_SUCCESS = `${BASE_ACTION}/ADD_IMAGE_TO_CART_SUCCESS`;

const GET_IMAGE_FROM_CART_REQUEST = `${BASE_ACTION}/GET_IMAGE_FROM_CART_REQUEST`;
const GET_IMAGE_FROM_CART_SUCCESS = `${BASE_ACTION}/GET_IMAGE_FROM_CART_SUCCESS`;

const REMOVE_IMAGE_FROM_CART_REQUEST = `${BASE_ACTION}/REMOVE_IMAGE_FROM_CART_REQUEST`;
const REMOVE_IMAGE_FROM_CART_SUCCESS = `${BASE_ACTION}/REMOVE_IMAGE_FROM_CART_SUCCESS`;

const SAVE_REF_REQUEST = `${BASE_ACTION}/SAVE_REF_REQUEST`;
const SAVE_REF_SUCCESS = `${BASE_ACTION}/SAVE_REF_SUCCESS`;

const CHECK_DETAIL_PAGE_REQUEST = `${BASE_ACTION}/CHECK_DETAIL_PAGE_REQUEST`;
const CHECK_DETAIL_PAGE_SUCCESS = `${BASE_ACTION}/CHECK_DETAIL_PAGE_SUCCESS`;

const CHECK_OPEN_NAV_REQUEST = `${BASE_ACTION}/CHECK_OPEN_NAV_REQUEST`;
const CHECK_OPEN_NAV_SUCCESS = `${BASE_ACTION}/CHECK_OPEN_NAV_SUCCESS`;

const checkOpenNav = (isOpenNav: boolean): ActionBase => ({
  type: CHECK_OPEN_NAV_REQUEST,
  payload: isOpenNav,
});

const checkDetailPage = (isSlick: boolean): ActionBase => ({
  type: CHECK_DETAIL_PAGE_REQUEST,
  payload: isSlick,
});

const saveRef = (name: string, ref: HTMLElement): ActionBase => ({
  type: SAVE_REF_REQUEST,
  payload: {
    name,
    ref,
  },
});

const addImageToCart = (imgInfo: ImageSource): ActionBase => ({
  type: ADD_IMAGE_TO_CART_REQUEST,
  payload: imgInfo,
});

const removeImageFromCart = (id: string): ActionBase => ({
  type: REMOVE_IMAGE_FROM_CART_REQUEST,
  payload: id,
});

const getImageFromCart = (): ActionBase => ({
  type: GET_IMAGE_FROM_CART_REQUEST,
  payload: null,
});

const getImageGallery = (): ActionBase => ({
  type: GET_IMAGE_GALLERY_REQUEST,
  payload: null,
});

export {
  GET_IMAGE_GALLERY_REQUEST,
  GET_IMAGE_GALLERY_FAILED,
  GET_IMAGE_GALLERY_SUCCESS,
  ADD_IMAGE_TO_CART_REQUEST,
  ADD_IMAGE_TO_CART_SUCCESS,
  GET_IMAGE_FROM_CART_REQUEST,
  GET_IMAGE_FROM_CART_SUCCESS,
  REMOVE_IMAGE_FROM_CART_REQUEST,
  REMOVE_IMAGE_FROM_CART_SUCCESS,
  SAVE_REF_REQUEST,
  SAVE_REF_SUCCESS,
  CHECK_DETAIL_PAGE_REQUEST,
  CHECK_DETAIL_PAGE_SUCCESS,
  CHECK_OPEN_NAV_REQUEST,
  CHECK_OPEN_NAV_SUCCESS,
  checkOpenNav,
  checkDetailPage,
  getImageGallery,
  addImageToCart,
  getImageFromCart,
  removeImageFromCart,
  saveRef,
};
