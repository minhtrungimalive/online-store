import React, { FunctionComponent } from 'react';
import { connect, useDispatch } from 'react-redux';
import { SideNavContentStyle } from './SideNavContentStyle';
import Card from '../../../components/Card';
import CartList from '../../../components/Cart/CartList';
import ImageIcon from '../../../components/ImageIcon';
import { sumPriceInSource } from '../../../utils/math';
import { RootState } from '../../../reducers';
import { ImageSource } from '../../../reducers/gallery/model';
import { checkOpenNav } from '../../../reducers/gallery/action';

interface SideNavContentProps {
  refs: { [key: string]: HTMLElement };
  cartList: ImageSource[];
}

const SideNavContent: FunctionComponent<SideNavContentProps> = props => {
  const { refs, cartList } = props;
  const dispatch = useDispatch();
  const closeNav = () => {
    refs.navRef.classList.remove('active--nav');
    refs.mainRef.style.transition = 'all 0.5s';
    refs.mainRef.style.width = `calc(100%)`;
    refs.mainRef.classList.remove('main--open--nav');
    checkOpenNav(false);
    dispatch(checkOpenNav(false));
  };

  return (
    <SideNavContentStyle>
      <div className="side-nav-header">
        <span className="close-btn" onClick={closeNav}>
          &times;
        </span>
        <img className="side-nav-logo" src="/logo.svg" alt="yellow-logo-nav" />
      </div>
      <div className="side-nav-body">
        <Card className="expired-label" hasHoverEffect={false}>
          <ImageIcon src="/feature-gallery/alert.png" alt="alert-expired" className="img__icon" />
          <p>
            PHOTOS EXPIRE: <span>12 MARCH 2020</span>
          </p>
        </Card>
        <CartList sources={cartList} className="cart--list" />
      </div>
      <div className="side-nav-footer">
        <div className="purchase-info">
          <span className="photo-total">{cartList.length} photos</span>
          <span className="total-label">
            Total
            <br />
            <br />
            <span className="photo-total count">£{sumPriceInSource(cartList)}</span>
          </span>
        </div>
        <div className="purchase-btn">
          <span>Purchase photos</span>
          <span className="purchase-icon">
            <ImageIcon className="arrow-icon" src="/icon/white_right_arrow.svg" />
          </span>
        </div>
      </div>
    </SideNavContentStyle>
  );
};

const mapStateToProps = (state: RootState) => ({
  refs: state.galleryReducer.refs,
  cartList: state.galleryReducer.cartList,
});

export default connect(mapStateToProps, {})(SideNavContent);
