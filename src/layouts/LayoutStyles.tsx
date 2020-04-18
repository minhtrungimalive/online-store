import styled from '@emotion/styled';

const ContainerStyle = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const HeaderCheckoutUsingStyle = styled.div`
  .container__header {
    display: flex;
    flex-direction: row;
    .btn {
      width: auto;
      border-radius: 0;
      padding: 14px 40px;
      cursor: pointer;
      span {
        margin-left: 19.5px;
        font-family: RubikMedium;
      }
    }
    .btn--back {
      background-color: #f5f5f5;
      margin-left: 81px;
      span {
        font-size: 15px;
        line-height: 18px;
      }
    }
    .btn--sercure {
      background-color: #fff;
      span {
        size: 12px;
        line-height: 24px;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .container__header {
      .btn {
        padding: 14px;
        span {
          margin-left: 5px;
        }
      }
      .btn--back {
        margin-left: 30px;
      }
    }
  }

  @media only screen and (max-width: 456px) {
    .container__header {
      .btn--back {
        margin-left: 10px;
        span {
          font-size: 11px;
        }
      }
      .btn--sercure {
        span {
          font-size: 10px;
        }
      }
    }
  }
`;
const HeadingRegisterUsingStyle = styled.div`
  min-height: 110px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #fbca00;
  position: fixed;
  z-index: 2;
  @media screen and (max-width: 1024px) {
    padding-left: 1.3rem;
    padding-right: 1.3rem;
  }
  .header-container {
    max-width: 770px;
    width: 100%;
    align-self: center;
    display: flex;

    .main-logo {
      max-height: 40px;
      width: auto;
      z-index: 1;
    }
    .menu-icon {
      display: none;
      width: 20px;
      height: 9px;
      cursor: pointer;
      margin: 0;
    }
  }

  @media screen and (max-width: 768px) {
    min-height: 90px;
    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .menu-icon {
        display: block;
      }
    }
  }
`;
const HeaderFAQPageUsingStyle = styled.div`
  position: relative;
  background: url('/faq_background.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 center;
  min-height: 388px;
  height: 388px;
  display: flex;
  justify-content: center;

  .main-logo {
    max-width: 181px;
    width: 181px;
    top: 14.17%;
    left: 50%;
    position: absolute;
    transform: translateX(-193%);
  }

  .menu-icon {
    position: absolute;
    width: 100%;
    top: 20%;
    display: none;
    justify-content: flex-end;

    .icon--toggle {
      width: 17px;
      height: 15px;
      margin: 0;
      img {
        width: 17px;
      }
    }
  }

  h1 {
    position: absolute;
    margin: 0;
    padding: 0;
    font-size: 60px;
    line-height: 64px;
    color: #fff;
    letter-spacing: 0.2px;
    top: 52%;
    width: 100%;
    left: 50%;
    transform: translateX(-67%);
    max-width: 521px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  @media screen and (max-width: 768px) {
    min-height: 204px;
    height: 204px;
    justify-content: center;
    transform: translateX(0);
    .main-logo {
      left: 50%;
      top: 19%;
      transform: translateX(-50%);
    }
    .menu-icon {
      display: flex;
      max-width: 428px;
    }
    h1 {
      font-size: 30px;
      line-height: 34px;
      max-width: 283px;
      transform: translateX(-50%);
      left: 50%;
    }
  }
  @media screen and (max-width: 502px) {
    background-position: -100px;
    .menu-icon {
      max-width: 302px;
    }
  }
`;
const HeaderPhotographerUsingStyle = styled.div`
  min-height: 110px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #fbca00;
  position: fixed;
  z-index: 2;
  @media screen and (max-width: 1024px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  @media screen and (max-width: 425px) {
    padding: 0 3em;
  }
  .header-container {
    max-width: 915px;
    width: 100%;
    align-self: center;
    display: flex;

    .main-logo {
      max-height: 40px;
      width: auto;
      z-index: 1;
    }
    .menu-icon {
      display: none;
      width: 20px;
      height: 9px;
      cursor: pointer;
    }

    @media screen and (max-width: 768px) {
      .main-logo {
        display: none;
      }
    }
    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .menu-icon {
        display: block;
      }
    }
  }
`;

const HeaderForGuestStyle = styled.div`
  min-height: 110px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1d2332;
  z-index: 1;
  .header-container {
    max-width: 752px;
    width: 100%;
    align-self: center;
    .main-logo {
      max-height: 40px;
      width: auto;
      z-index: 1;
    }
    .menu-icon {
      display: none;
      width: 20px;
      height: 9px;
      cursor: pointer;
      margin: 0;
    }
    @media screen and (max-width: 840px) {
      padding: 0 2.5em;
    }
    @media screen and (max-width: 425px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .menu-icon {
        display: block;
      }
    }
  }
`;

const HeaderLandingStyle = styled.div`
  background: url('/hero-background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  min-height: 492px;
  width: 100%;
  .logo--wrapper {
    position: absolute;
    max-width: 982px;
    width: 100%;
    height: 54px;
    top: 55px;
    left: 50%;
    transform: translateX(-50%);
    .main-logo {
      position: absolute;
      max-height: 3rem;
      width: auto;
      top: 0;
      left: 0;
      z-index: 1;
    }
  }
  .login--wrapper {
    position: absolute;
    max-width: 982px;
    width: 100%;
    bottom: 60%;
    left: 50%;
    transform: translateX(-50%);
  }
  .menu-icon {
    position: absolute;
    top: 25%;
    right: 0;
    transform: translateX(20%);
    z-index: 3;
    color: #fff;
    display: none;
    justify-content: center;
    align-items: center;
  }
  .dark-bg {
    position: absolute;
    height: 100%;
    width: 100%;
    box-shadow: 0px 0px 90px 140px rgba(0, 0, 0, 0.14) inset;
  }

  .caption {
    padding-top: 15px;
    position: absolute;
    top: 48.38%;
    left: calc(62.5% - 8.35%);
    transform: translateX(-100%);
    color: #fff;
    max-width: 535px;
    font-size: 60px;
    line-height: 64px;
    z-index: 1;
    width: 100%;
    font-family: RubikMedium;
  }
  @media only screen and (max-width: 1120px) {
    display: flex;
    justify-content: center;
    background-size: 69.4375rem;
    .caption {
      font-size: 30px;
      line-height: 1.13;
      max-width: 330px;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -80%, 0);
    }
    .logo--wrapper {
      max-width: 330px;
      top: 30px;

      .main-logo {
        max-width: 180px;
        left: 0;
      }
    }

    .icon--toggle {
      width: 20px;
      height: 9px;
      margin: 0;
    }
  }
  @media screen and (max-width: 425px) {
    .caption {
      max-width: 260px;
    }
    .logo--wrapper {
      max-width: 260px;
    }
    .menu-icon {
      display: block;
    }
  }
`;

const HeaderClientUsingStyle = styled.div`
  min-height: 110px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.23);
  .header--wrapper {
    max-width: 1400px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 40px;
  }
  .main-logo {
    max-height: 40px;
    width: auto;
    z-index: 1;
  }
  .feature-group {
    display: flex;
    justify-content: center;
    align-items: center;
    .add-all-photos {
      border: 2px solid #1d2332;
      font-size: 15px;
      font-weight: 500;
      border-radius: 4px;
      padding: 12px 22px;
      background: #fff;
      cursor: pointer;
      margin: 0 1em;
      outline: none;
      display: flex;
      align-items: center;
      .added-photos {
        width: 15px;
        height: 12px;
        margin: 0;
        margin-right: 7px;
      }
    }
  }

  .back {
    max-width: 15em;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 4px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: #f1f1f1;
    padding: 14px 22px;
    .back-icon {
      width: 15.5px;
      height: 10px;
    }
    p {
      font-weight: 500;
      font-size: 15px;
      margin: 0;
    }
  }
`;

const MenuBarStyle = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.85);
  width: 100%;
  height: 100%;
  transform: translateY(-100%);
  transition: transform 0.5s ease-in;
  opacity: 0;
  &.active {
    opacity: 1;
    transform: translateY(0);
    transition: transform 0.5s ease-out, opacity 0.1s ease;
  }
  &.not-active {
    opacity: 0;
    transform: translateY(-100%);
    transition: transform 0.5s ease-out, opacity 1.5s ease;
  }
  span {
    color: rgba(255, 255, 255, 0.75);
    font-size: 80px;
    position: absolute;
    top: 3%;
    right: 8%;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 2em 5em;
      a {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.6);
        font-size: 50px;
        transition: color 0.2s ease-in-out;
        &:hover {
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
`;

const ContextWrapperStyle = styled.div`
  height: 100%;
`;

const FooterStyled = styled.footer`
  align-items: flex-end;
  min-height: 110px;
  width: 100%;
  padding: 0 8% 0 15%;
  background-color: #1d2332;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .bot-nav {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    color: #fff;
    li {
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
  img {
    max-height: 40px;
    width: auto;
  }

  @media only screen and (max-width: 768px) and (min-width: 320px) {
    justify-content: center;
    .bot-nav {
      display: none;
    }
  }
`;

const FooterRegisterStyled = styled.footer`
  align-items: flex-end;
  min-height: 110px;
  width: 100%;
  padding: 0;
  background-color: #1d2332;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .logo__container {
    max-width: 770px;
    width: 100%;
  }
  .bot-nav {
    display: flex;
    position: absolute;
    right: 10%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    color: #fff;
    li {
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
  img {
    max-height: 40px;
    width: auto;
  }

  @media only screen and (max-width: 1024px) {
    padding-left: 1.3rem;
  }
  @media only screen and (max-width: 768px) {
    padding-left: 0;
    justify-content: center;
    .logo__container {
      display: flex;
      justify-content: center;
    }
    .bot-nav {
      display: none;
    }
  }
`;

export {
  HeaderPhotographerUsingStyle,
  HeaderLandingStyle,
  HeaderClientUsingStyle,
  HeaderForGuestStyle,
  HeadingRegisterUsingStyle,
  ContextWrapperStyle,
  FooterStyled,
  FooterRegisterStyled,
  MenuBarStyle,
  ContainerStyle,
  HeaderFAQPageUsingStyle,
  HeaderCheckoutUsingStyle,
};
