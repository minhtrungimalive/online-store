import React, { FunctionComponent, useState } from 'react';
import { navigate } from '@reach/router';
import { connect, useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/core';
import { MdLock } from 'react-icons/md';

import {
  HeaderForGuestStyle,
  HeaderPhotographerUsingStyle,
  HeaderLandingStyle,
  HeaderClientUsingStyle,
  HeadingRegisterUsingStyle,
  HeaderFAQPageUsingStyle,
  HeaderCheckoutUsingStyle,
} from './LayoutStyles';
import ImageIcon from '../components/ImageIcon';
import { RootState, ActionBase } from '../reducers';
import { saveRef, checkDetailPage, checkOpenNav } from '../reducers/gallery/action';
import { eventEmitter } from '../config/eventEmitter';
import Button from '../components/Form/Button';
import { navWidth } from '../utils/constant';

interface HeaderProps {
  isGuestPage?: boolean;
  isLandingPage?: boolean;
  isClientPage?: boolean;
  isPhotographerPage?: boolean;
  isRegisterPage?: boolean;
  isFAQPage?: boolean;
  isCheckoutPage?: boolean;
  refs: { [key: string]: HTMLDivElement };
  isShowMorePhotos?: boolean;
  saveRefAction: (name: string, ref: HTMLElement) => ActionBase;
  checkDetailPage?: (isSlider: boolean) => ActionBase;
  checkOpenNav?: (isOpenNav: boolean) => ActionBase;
  isOpenNav?: boolean;
}

const HeaderCheckoutUsing: FunctionComponent<{}> = () => {
  return (
    <HeaderCheckoutUsingStyle>
      <div className="container__header">
        <Button
          label="Back to your cart"
          className="btn btn--back"
          icon={<img src="/icon/black_left_arrow.svg" alt="black_left_arrow.svg" />}
          reverse
        />
        <Button label="SERCURE CHECKOUT" className="btn btn--sercure" icon={<MdLock />} reverse />
      </div>
    </HeaderCheckoutUsingStyle>
  );
};

const HeadingRegisterUsing: FunctionComponent<HeaderProps> = () => {
  return (
    <HeadingRegisterUsingStyle>
      <div className="header-container">
        <img
          className="main-logo"
          src="/logo-navy.svg"
          alt="Logo Navy"
          onClick={() => {
            navigate('/');
          }}
        />
        <ImageIcon className="menu-icon" src="/icon/black_menu_icon.svg" />
      </div>
    </HeadingRegisterUsingStyle>
  );
};

const HeadingPhotographerUsing: FunctionComponent<HeaderProps> = () => {
  return (
    <HeaderPhotographerUsingStyle
      css={css`
        @media screen and (max-width: 768px) {
          background: transparent;
        }
      `}
    >
      <div className="header-container">
        <img
          className="main-logo"
          src="/logo-navy.svg"
          alt="Logo Navy"
          onClick={() => {
            navigate('/');
          }}
        />
        <ImageIcon className="menu-icon" src="/icon/black_menu_icon.svg" />
      </div>
    </HeaderPhotographerUsingStyle>
  );
};

const HeaderForGuest: FunctionComponent = () => {
  return (
    <HeaderForGuestStyle>
      <div className="header-container">
        <img
          className="main-logo"
          src="/logo-main.svg"
          alt="Logo White"
          onClick={() => {
            navigate('/');
          }}
        />
        <ImageIcon className="menu-icon" src="/icon/menu_icon.svg" />
      </div>
    </HeaderForGuestStyle>
  );
};

const HeaderLanding = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenuBar = () => {
    const bodyEl = document.body;
    if (!isOpen) {
      bodyEl.style.overflow = 'hidden';
    } else {
      bodyEl.style.overflow = 'auto';
    }
    setOpen(!isOpen);
  };

  return (
    <>
      <HeaderLandingStyle>
        <div className="dark-bg" />
        <div className="logo--wrapper">
          <img className="main-logo" src="/logo-white.svg" alt="Logo White" />
          {/* {!isOpen && (
            <div className={isOpen ? 'menu-icon active' : 'menu-icon not-active'}>
              <ImageIcon onClick={toggleMenuBar} src="/icon/menu_icon.svg" className="icon--toggle" />
            </div>
          )} */}
          <div className="menu-icon">
            <ImageIcon onClick={toggleMenuBar} src="/icon/menu_icon.svg" className="icon--toggle" />
          </div>
        </div>
        <div className="login--wrapper">
          <div className="caption">The best way to get your perfect holiday photos.</div>
        </div>
      </HeaderLandingStyle>
      {/* <MenuBarStyle className={isOpen ? 'active' : 'not-active'}>
        <span onClick={toggleMenuBar}>&times;</span>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Photographers</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
      </MenuBarStyle> */}
    </>
  );
};

const HeaderClientUsing = (props: HeaderProps) => {
  const { refs, saveRefAction, isShowMorePhotos } = props;

  const { cartList, sources } = useSelector((rootState: RootState) => rootState.galleryReducer);

  const dispatch = useDispatch();

  const openNav = () => {
    refs.navRef.classList.add('active--nav');
    refs.mainRef.classList.add('main--open--nav');
    refs.mainRef.style.transition = 'all 0.3s';
    refs.mainRef.style.width = `calc(100% - ${navWidth})`;
    dispatch(checkOpenNav(true));
  };

  return (
    <HeaderClientUsingStyle
      ref={r => {
        if (!r) return;
        saveRefAction('headerRef', r);
      }}
    >
      <div className="header--wrapper">
        {isShowMorePhotos ? (
          <button
            type="button"
            className="back"
            onClick={() => {
              checkDetailPage(false);
              dispatch(checkDetailPage(false));
            }}
          >
            <ImageIcon className="back-icon" src="/icon/black_left_arrow.svg" />
            <p>Back to your photos</p>
          </button>
        ) : (
          <img
            className="main-logo"
            src="/logo-navy.svg"
            alt="Logo Navy"
            onClick={() => {
              navigate('/');
            }}
          />
        )}
        <div className="feature-group">
          <button
            type="button"
            className="add-all-photos"
            onClick={() => {
              if (cartList.length < sources.length) {
                eventEmitter.emit('add-all-photos', true);
              }
            }}
          >
            {cartList.length === sources.length && <ImageIcon className="added-photos" src="/icon/added.png" />}
            {cartList.length === sources.length ? 'All photos added' : 'Add all photos to cart'}
          </button>
          <ImageIcon isButton src="/feature-gallery/profile.png" alt="Profile feature" />
          <ImageIcon isButton src="/feature-gallery/cart.png" alt="Cart feature" onClick={openNav} />
        </div>
      </div>
    </HeaderClientUsingStyle>
  );
};

const HeaderFAQPage = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenuBar = () => {
    const bodyEl = document.body;
    if (!isOpen) {
      bodyEl.style.overflow = 'hidden';
    } else {
      bodyEl.style.overflow = 'auto';
    }
    setOpen(!isOpen);
  };
  return (
    <HeaderFAQPageUsingStyle>
      <div className={isOpen ? 'menu-icon active' : 'menu-icon not-active'}>
        <ImageIcon onClick={toggleMenuBar} src="/icon/menu_icon.svg" className="icon--toggle" />
      </div>
      <img className="main-logo" src="/logo-white.svg" alt="Logo White" />
      <h1>Frequently asked questions</h1>
    </HeaderFAQPageUsingStyle>
  );
};

const Header: FunctionComponent<HeaderProps> = props => {
  const { isLandingPage, isClientPage, isPhotographerPage, isGuestPage, isRegisterPage, isFAQPage, isCheckoutPage } = props;
  if (isLandingPage) {
    return <HeaderLanding />;
  }
  if (isClientPage) {
    return <HeaderClientUsing {...props} />;
  }
  if (isPhotographerPage) {
    return <HeadingPhotographerUsing {...props} />;
  }
  if (isGuestPage) {
    return <HeaderForGuest {...props} />;
  }
  if (isRegisterPage) {
    return <HeadingRegisterUsing {...props} />;
  }
  if (isFAQPage) {
    return <HeaderFAQPage />;
  }
  if (isCheckoutPage) {
    return <HeaderCheckoutUsing />;
  }
  return null;
};

const mapStateToProps = (state: RootState) => ({
  refs: state.galleryReducer.refs,
  isShowMorePhotos: state.galleryReducer.isSlider,
  isOpenNav: state.galleryReducer.isOpenNav,
});

const mapDispatchToProps = {
  saveRefAction: saveRef,
  checkDetailPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
