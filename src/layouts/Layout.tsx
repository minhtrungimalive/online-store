import React, { FunctionComponent } from 'react';
import Header from './Header';
import Footer, { FooterRegisterPage } from './Footer';
import GlobalStyle from '../components/GlobalStyle';
import { ContainerStyle } from './LayoutStyles';

interface LayoutProps {
  isGuestPage?: boolean;
  isLandingPage?: boolean;
  isClientPage?: boolean;
  isPhotographerPage?: boolean;
  isRegisterPage?: boolean;
  isFAQPage?: boolean;
  isCheckoutPage?: boolean;
  onRefEvent?: (e: HTMLDivElement) => void;
}

const Layout: FunctionComponent<LayoutProps> = props => {
  const {
    children,
    isLandingPage,
    onRefEvent,
    isClientPage,
    isPhotographerPage,
    isGuestPage,
    isRegisterPage,
    isFAQPage,
    isCheckoutPage,
  } = props;
  return (
    <>
      <GlobalStyle />
      <ContainerStyle
        ref={r => {
          if (!onRefEvent || !r) return;
          onRefEvent(r);
        }}
      >
        <Header
          isLandingPage={isLandingPage}
          isClientPage={isClientPage}
          isPhotographerPage={isPhotographerPage}
          isGuestPage={isGuestPage}
          isRegisterPage={isRegisterPage}
          isFAQPage={isFAQPage}
          isCheckoutPage={isCheckoutPage}
        />
        {children}
        {isRegisterPage ? <FooterRegisterPage /> : <Footer />}
      </ContainerStyle>
    </>
  );
};

export default Layout;
