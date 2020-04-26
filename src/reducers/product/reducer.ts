import {
  GET_PRODUCT_LIST_SUCCCESS,
  GET_PRODUCT_LIST_FAILED,
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_FROM_CART_SUCCESS,
  SAVE_REF_SUCCESS,
  ADD_PRODUCT_TO_CART_SUCCESS,
  REMOVE_PRODUCT_FROM_CART_SUCCESS,
} from './action';
import { ActionBase } from '..';
import { ProductState } from './model';

const initialState: ProductState = {
  loading: false,
  errors: {},
  sources: [],
  cartList: [],
  refs: {},
};

const productReducer = (state = initialState, action: ActionBase): ProductState => {
  switch (action.type) {
    case GET_PRODUCT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCT_LIST_SUCCCESS:
      return {
        ...state,
        sources: action.payload,
        loading: false,
      };

    case GET_PRODUCT_LIST_FAILED:
      return {
        ...state,
        loading: false,
        errors: {
          msg: 'Data empty',
          code: 404,
        },
      };

    case ADD_PRODUCT_TO_CART_SUCCESS:
      return {
        ...state,
        cartList: action.payload,
      };

    case GET_PRODUCT_FROM_CART_SUCCESS:
      return {
        ...state,
        cartList: action.payload,
      };

    case REMOVE_PRODUCT_FROM_CART_SUCCESS:
      return {
        ...state,
        cartList: action.payload,
      };

    case SAVE_REF_SUCCESS:
      return {
        ...state,
        refs: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default productReducer;
