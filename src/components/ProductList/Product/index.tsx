import React, { FunctionComponent, useEffect, useRef } from 'react';
import { FiPlus } from 'react-icons/fi';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ProductStyled from './ProductStyled';
import { ProductSource } from '../../../reducers/product/model';
// import { useDispatch } from 'react-redux';
import { RootState } from '../../../reducers';
import { getProductList } from '../../../mock-api';
import { saveRef } from '../../../reducers/gallery/action';

interface ProductProps {
  cartList?: ProductSource[];
  productInfo?: ProductSource;
  className?: string;
}

const Product: FunctionComponent<ProductProps> = props => {
  const { productInfo, className } = props;
  const componentIsMounted = useRef(true);
  useEffect(() => {
    return () => {
      componentIsMounted.current = false;
    };
  });
  const routeChange = () => {
    const path = `/detail`;
    const history = useHistory();

    history.push(path);
  };
  const imgUrl = productInfo && productInfo?.imgUrl ? productInfo.imgUrl : '';
  const name = productInfo && productInfo.name ? productInfo.name : '';
  const discount = productInfo && productInfo?.discount ? productInfo.discount : 0;
  const price = productInfo && productInfo?.price ? productInfo.price : NaN;
  const priceSell = price && productInfo?.discount && productInfo.discount > 0 ? price - price * discount : price;

  return (
    <ProductStyled className={className} onClick={routeChange} role="button">
      <div className="img--product-control">
        <img src={imgUrl} alt={imgUrl} />
      </div>

      {discount && discount > 0 ? (
        <div className="tag--discount-percent">
          <p className="text--discount-percent">-{discount}%</p>
        </div>
      ) : null}

      <div className="product--info">
        <p className="text--name"> {name}</p>
        <div className="price--box">
          {discount && discount > 0 ? <span className="text--root-price">{price} đ</span> : null}
          <span className="text--selling-price">{discount && discount > 0 ? ` ${priceSell} đ` : `Price : ${priceSell} đ`}</span>
        </div>
      </div>
      <div className="btn--group">
        <button className="btn--control" type="button">
          <img className="img--control add--icon" src="/icon/added.png" alt="/icon/added.png" />
          {/* <ImageIcon className="add-icon" src="/icon/added.png" width={5} /> */}
        </button>
        <button className="btn--control" type="button">
          {/* <ImageIcon className="plus-icon" src="/icon/plus_icon.png" /> */}
          {/* <img className="img--control plus--icon" src="/icon/plus_icon.png" alt="/icon/plus_icon.png" /> */}
          <FiPlus className="img--control plus--icon" />
        </button>
      </div>
    </ProductStyled>
  );
};

const mapStateToProps = (state: RootState) => ({
  refs: state.productReducer.refs,
  cartList: state.productReducer.cartList,
  loading: state.productReducer.loading,
});

const mapDispatchToProps = {
  getProductListAction: getProductList,
  saveRefAction: saveRef,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
