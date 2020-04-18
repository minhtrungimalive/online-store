import { ErrorBase } from '..';

export interface ImageSource {
  id?: string;
  imgUrl?: string;
  caption?: string;
  price?: number;
  unit?: string;
}

export interface GalleryState {
  loading: boolean;
  errors: ErrorBase;
  sources: ImageSource[];
  cartList: ImageSource[];
  refs: { [key: string]: HTMLDivElement };
  isSlider: boolean;
  isOpenNav: boolean;
}
