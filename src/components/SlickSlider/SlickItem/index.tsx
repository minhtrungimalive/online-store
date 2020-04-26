import React, { FunctionComponent, useState, useEffect, useRef } from 'react';
import { connect, useDispatch } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { css } from '@emotion/core';
import ImageIcon from '../../ImageIcon';
import { ImageSource } from '../../../reducers/gallery/model';
import { RootState, ActionBase } from '../../../reducers';
import { addImageToCart, removeImageFromCart, checkOpenNav } from '../../../reducers/gallery/action';
import { eventEmitter } from '../../../config/eventEmitter';
import { SlickItemStyle } from './SlickItemStyle';
import { navWidth } from '../../../utils/constant';

export interface SlickItemProps {
  cartList: ImageSource[];
  imgInfo: ImageSource;
  imgUrl?: string;
  refs: { [key: string]: HTMLDivElement };
  addImageToCartAction: (imgInfo: ImageSource) => void;
  removeImageFromCartAction: (id: string) => void;
  checkOpenNav?: (isOpenNav: boolean) => ActionBase;
}

const SlickItem: FunctionComponent<SlickItemProps> = props => {
  const { imgInfo, imgUrl, refs, addImageToCartAction, removeImageFromCartAction, cartList } = props;
  const [isAdded, setAdded] = useState(false);
  const [isHover, setHover] = useState(false);
  const dispatch = useDispatch();
  // Here's how we'll keep track of our component's mounted state
  const componentIsMounted = useRef(true);
  useEffect(() => {
    return () => {
      componentIsMounted.current = false;
    };
  }, []);

  eventEmitter.on('cart-remove', (id: string) => {
    if (componentIsMounted.current && id === imgInfo.id) {
      setAdded(false);
    }
  });

  const openNav = () => {
    refs.navRef.classList.add('active--nav');
    refs.mainRef.classList.add('main--open--nav');
    refs.mainRef.style.transition = 'all 0.3s';
    refs.mainRef.style.width = `calc(100% - ${navWidth})`;
    dispatch(checkOpenNav(true));
  };

  const addToCart = () => {
    addImageToCartAction(imgInfo);
  };

  const removeFromCart = () => {
    if (!imgInfo.id) return;
    removeImageFromCartAction(imgInfo.id);
  };

  const onHandleCart = () => {
    if (isAdded) {
      setAdded(false);
      removeFromCart();
    } else {
      openNav();
      setAdded(true);
      addToCart();
    }
  };

  useEffect(() => {
    const indexFound = cartList.findIndex(v => imgInfo.id === v.id);
    if (componentIsMounted.current && indexFound > -1) {
      setAdded(true);
    }
  }, []);

  if (!imgInfo) return null;

  return (
    <SlickItemStyle isAdded={isAdded} imgUrl={imgUrl}>
      <div className="btn-group">
        <button
          type="button"
          className="outline-btn"
          onClick={onHandleCart}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          {!isAdded ? (
            <AiOutlineShoppingCart
              css={css`
                margin-right: 0.5em;
                font-size: 1.5em;
              `}
            />
          ) : isHover ? (
            <ImageIcon src="/icon/remove.png" width={0.625} height={0.625} />
          ) : (
            <ImageIcon src="/icon/added.png" width={0.625} height={0.625} />
          )}
          {!isAdded ? 'Add to cart' : isHover ? 'Delete from cart' : 'Added to cart'}
        </button>
      </div>
    </SlickItemStyle>
  );
};

const mapStateToProps = (state: RootState) => ({
  refs: state.galleryReducer.refs,
  cartList: state.galleryReducer.cartList,
});

const mapDispatchToProps = {
  addImageToCartAction: addImageToCart,
  removeImageFromCartAction: removeImageFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(SlickItem);
