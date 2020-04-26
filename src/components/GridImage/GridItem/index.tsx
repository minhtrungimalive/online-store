import React, { FunctionComponent, useState, useEffect, useRef } from 'react';
import { useDispatch, connect } from 'react-redux';
import ImageIcon from '../../ImageIcon';
import { ImageSource } from '../../../reducers/gallery/model';
import { RootState, ActionBase } from '../../../reducers';
import { addImageToCart, removeImageFromCart, checkDetailPage, checkOpenNav } from '../../../reducers/gallery/action';
import { eventEmitter } from '../../../config/eventEmitter';
import { GridItemStyle } from './GridItemStyle';
import { navWidth } from '../../../utils/constant';

interface GridItemProps {
  cartList: ImageSource[];
  imgInfo: ImageSource;
  refs: { [key: string]: HTMLElement };
  addImageToCartAction: (imgInfo: ImageSource) => void;
  removeImageFromCartAction: (id: string) => void;
  checkDetailPage?: (isSlider: boolean) => ActionBase;
  isSlider?: boolean;
  className?: string;
  checkOpenNav?: (isOpenNav: boolean) => ActionBase;
  isOpenNav?: boolean;
}

const GridItem: FunctionComponent<GridItemProps> = props => {
  const dispatch = useDispatch();
  const { imgInfo, refs, addImageToCartAction, removeImageFromCartAction, cartList, className } = props;
  const [isAdded, setAdded] = useState(false);
  const [isHover, setHover] = useState(false);
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

  eventEmitter.on('add-all-photos', (isAdd: boolean) => {
    if (componentIsMounted.current && isAdd && cartList.findIndex(v => v.id === imgInfo.id) < 0) {
      addImageToCartAction(imgInfo);
    }
  });

  const openNav = () => {
    refs.navRef.classList.add('active--nav');
    refs.mainRef.classList.add('main--open--nav');
    refs.mainRef.style.transition = 'all 0.3s';
    refs.mainRef.style.width = `calc(100% - ${navWidth})`;
    checkOpenNav(true);
    dispatch(checkOpenNav(true));
  };

  const addToCart = () => {
    addImageToCartAction(imgInfo);
  };

  const removeFromCart = () => {
    if (!imgInfo.id) return;
    removeImageFromCartAction(imgInfo.id);
  };

  const onHandleClick = () => {
    checkDetailPage(true);
    dispatch(checkDetailPage(true));
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

  useEffect(() => {
    const indexFound = cartList.findIndex(v => imgInfo.id === v.id);
    if (componentIsMounted.current && indexFound > -1) {
      setAdded(true);
    }
  }, [cartList.length]);

  return (
    <GridItemStyle isAdded={isAdded} className={className}>
      <div className="back--drop" />
      <img src={imgInfo.imgUrl} alt={imgInfo.caption} className="main--img" />
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
          {!isAdded ? null : isHover ? (
            <ImageIcon className="remove-icon" src="/icon/remove.png" />
          ) : (
            <ImageIcon className="add-icon" src="/icon/added.png" />
          )}
          <span className="btn-label">{!isAdded ? 'Add to cart' : isHover ? 'Delete from cart' : 'Added to cart'}</span>
        </button>
        <div className="outline-btn show-more" onClick={onHandleClick}>
          <ImageIcon className="plus-icon" src="/icon/plus_icon.png" />
        </div>
      </div>
    </GridItemStyle>
  );
};

const mapStateToProps = (state: RootState) => ({
  refs: state.galleryReducer.refs,
  cartList: state.galleryReducer.cartList,
  isSlider: state.galleryReducer.isSlider,
});

const mapDispatchToProps = {
  addImageToCartAction: addImageToCart,
  removeImageFromCartAction: removeImageFromCart,
  checkDetailPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(GridItem);
