import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FooterStyled, FooterRegisterStyled } from './LayoutStyles';
import { ActionBase } from '../reducers';
import { saveRef } from '../reducers/gallery/action';

interface FooterProps {
  saveRefAction: (name: string, ref: HTMLElement) => ActionBase;
}

const Footer: FunctionComponent<FooterProps> = props => {
  const { saveRefAction } = props;
  return (
    <FooterStyled
      ref={r => {
        if (!r) return;
        saveRefAction('footerRef', r);
      }}
      className="footer--control"
    >
      <div className="logo__container">
        <img src="/logo-main.svg" alt="online-store-logo-main" />
      </div>
      <ul className="bot-nav">
        <li>
          <a href="#">About</a>
        </li>{' '}
        &nbsp;&ndash;&nbsp;
        <li>
          <a href="#">Contact us</a>
        </li>{' '}
        &nbsp;&ndash;&nbsp;
        <li>
          <a href="#">FAQ</a>
        </li>{' '}
        &nbsp;&ndash;&nbsp;
        <li>
          <a href="#">Photographers</a>
        </li>{' '}
        &nbsp;&ndash;&nbsp;
        <li>
          <a href="#">Help</a>
        </li>
      </ul>
    </FooterStyled>
  );
};

const FooterRegisterPage: FunctionComponent<{}> = () => {
  return (
    <FooterRegisterStyled className="footer--control">
      <div className="logo__container">
        <img src="/logo-main.svg" alt="online-store-logo-main" />
      </div>
      <ul className="bot-nav">
        <li>
          <a href="#">About</a>
        </li>
        &nbsp;&ndash;&nbsp;
        <li>
          <a href="#">Contact us</a>
        </li>
        &nbsp;&ndash;&nbsp;
        <li>
          <a href="#">FAQ</a>
        </li>
        &nbsp;&ndash;&nbsp;
        <li>
          <a href="#">Photographers</a>
        </li>
        &nbsp;&ndash;&nbsp;
        <li>
          <a href="#">Help</a>
        </li>
      </ul>
    </FooterRegisterStyled>
  );
};

const mapDispatchToProps = {
  saveRefAction: saveRef,
};

export default connect(null, mapDispatchToProps)(Footer);
export { FooterRegisterPage };
