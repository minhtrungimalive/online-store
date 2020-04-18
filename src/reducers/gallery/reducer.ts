import {
  GET_IMAGE_GALLERY_FAILED,
  GET_IMAGE_GALLERY_SUCCESS,
  GET_IMAGE_GALLERY_REQUEST,
  ADD_IMAGE_TO_CART_SUCCESS,
  GET_IMAGE_FROM_CART_SUCCESS,
  REMOVE_IMAGE_FROM_CART_SUCCESS,
  SAVE_REF_SUCCESS,
  CHECK_DETAIL_PAGE_SUCCESS,
  CHECK_OPEN_NAV_SUCCESS,
  CHECK_OPEN_NAV_REQUEST,
} from './action';
import { ActionBase } from '..';
import { GalleryState } from './model';

const initialState: GalleryState = {
  loading: false,
  errors: {},
  sources: [],
  cartList: [],
  refs: {},
  isSlider: false,
  isOpenNav: false,
};

const galleryReducer = (state = initialState, action: ActionBase): GalleryState => {
  switch (action.type) {
    case CHECK_OPEN_NAV_REQUEST:
      return {
        ...state,
        loading: false,
      };

    case CHECK_OPEN_NAV_SUCCESS:
      return {
        ...state,
        isOpenNav: action.payload,
      };
    case GET_IMAGE_GALLERY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_IMAGE_GALLERY_FAILED:
      return {
        ...state,
        loading: false,
        errors: {
          msg: 'Data empty',
          code: 404,
        },
      };
    case GET_IMAGE_GALLERY_SUCCESS:
      return {
        ...state,
        sources: action.payload,
        loading: false,
      };

    case ADD_IMAGE_TO_CART_SUCCESS:
      return {
        ...state,
        cartList: action.payload,
      };

    case GET_IMAGE_FROM_CART_SUCCESS:
      return {
        ...state,
        cartList: action.payload,
      };

    case REMOVE_IMAGE_FROM_CART_SUCCESS:
      return {
        ...state,
        cartList: action.payload,
      };

    case SAVE_REF_SUCCESS:
      return {
        ...state,
        refs: action.payload,
      };

    case CHECK_DETAIL_PAGE_SUCCESS:
      return {
        ...state,
        isSlider: action.payload,
      };

    default: {
      return state;
    }
  }
};

export default galleryReducer;
