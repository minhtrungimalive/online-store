import { ErrorBase } from '..';

export interface ProductSource {
  id?: string;
  name?: string;
  imgUrl?: string;
  description?: string;
  discount?: number;
  price?: number;
}

export interface ProductState {
  loading: boolean;
  errors: ErrorBase;
  sources: ProductSource[];
  cartList: ProductSource[];
  refs: { [key: string]: HTMLElement };
}
