import styled from '@emotion/styled';

const LandingPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
  padding-top: 74px;
  .btn--control {
    padding: 12px 2.4em !important;
  }
  .service--title {
    font-size: 20px;
    font-family: RubikMedium;
    text-align: center;
    margin: 0;
    line-height: 24px;
  }
  .service--group {
    margin-top: 52px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    max-width: 55.5625rem;
    width: 100%;
    img {
      width: 100%;
      max-width: 11.6875rem;
    }
    .service {
      max-width: 13.9375rem;
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        font-size: 15px;
        line-height: 24px;
        text-align: center;
        font-family: RubikMedium;
      }
      &.service--1 {
        span {
          color: #fbca00;
        }
      }
      &.service--2 {
        span {
          color: #5e7ece;
        }
      }
      &.service--3 {
        span {
          color: #ff695a;
        }
      }
      span {
        position: absolute;
        left: 0;
        top: -10px;
        font-size: 30px;
        font-family: RubikMedium;
        line-height: 1.23;
      }
    }
  }
  .join--now {
    text-align: center;
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 1.6rem;
    margin-top: 2.5rem;

    p {
      max-width: 435px;
      margin: 0;
      font-family: RubikMedium;
      a {
        text-decoration: none;
        color: #fbca00;
      }
    }
  }

  .side__slider {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #fafafa;
    flex: 1 0 auto;
    width: 100%;
    position: relative;
    padding: 3rem 0 1.5rem 0;
    .side__wrapper {
      display: flex;
      flex-direction: row;
      max-width: 1330px;
      width: 100%;
    }
    .left__slider {
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      flex: 5;
      position: relative;
      .reason--using {
        max-width: 28.125rem;
        width: 100%;
        z-index: 1;
        transform: translateX(6%);
        p.title {
          font-size: 44px;
          transform: translateX(10%);
          span:last-of-type {
            font-family: RubikMedium;
          }
        }
        .card__items {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          max-width: 26.875rem;
          width: 100%;
          img {
            max-width: 54px;
            width: 100%;
            max-height: 44px;
            height: 100%;
            margin-right: 2rem;
          }
          p {
            font-size: 18px;
            line-height: 1.4444;
          }
        }
        .mobile--download {
          justify-content: flex-start;
          margin-top: 2rem;
          transform: translateX(10%);
        }
      }
    }
    .right__slider {
      display: flex;
      flex: 5;
      position: relative;
      color: #fff;
      background: url('/landing-page/intro-man-bg.jpg');
      background-size: cover;
      background-position: center center;
      max-width: 665px;
      max-height: 675px;
      .group--text {
        position: absolute;
        top: 10.5%;
        left: 11.87%;
        p {
          margin: 0;
          max-width: 408px;
          font-family: RubikRegular;
          &:first-of-type {
            font-size: 24px;
            line-height: 1.1875;
            font-family: RubikBoldItalic;
          }
          &:last-of-type {
            font-size: 16px;
            line-height: 3.07;
            font-family: RubikMedium;
          }
        }
      }
      .bullet__slider {
        position: absolute;
        top: 37.3333%;
        left: 12.48%;
        display: flex;
        flex-direction: column;
        z-index: 1;

        .bullet {
          height: 0.7em;
          width: 0.7em;
          background: #fff;
          border-radius: 50%;
          margin: 0.5em 0;
          opacity: 0.5;
          &.active {
            opacity: 1;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1120px) {
    padding-top: 13.625rem;
    .service--group {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .side__slider {
      .left__slider {
        width: 100%;
        padding-left: 2%;
        padding-right: 2%;
        justify-content: center;
        .reason--using {
          transform: translateX(0);

          p.title {
            transform: translateX(0);
          }
          .card__items {
            flex-direction: column;
            text-align: center;
            margin: 20px 0;
            padding: 10px 10px;
            img {
              margin-right: 0rem;
            }
            p {
              padding: 0 1.5rem;
            }
          }
        }
        .title {
          margin: 0;
          text-align: center;
        }
      }
      .right__slider {
        .bullet__slider {
          top: 100%;
          left: 50%;
          transform: translateY(-140%);
        }
        .group--text {
          max-width: 60%;
          top: 14%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .mobile--download {
        display: none;
        transform: translateX(0);
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .service--group {
      flex-direction: column;
      align-items: center;
      .service {
        margin-top: 2rem;
        p {
          line-height: 1.6;
        }
      }
    }
    .join--now {
      display: none;
    }
    .join--now--mobile {
      margin-top: 40px;
    }
    .side__slider {
      padding-bottom: 0;
      .side__wrapper {
        flex-direction: column;
      }
      margin-top: 30px;
      flex-direction: column;
      align-items: center;
      .left__slider {
        .reason--using {
          .card__items {
            padding: 10px 5px;
          }
          p.title {
            font-size: 24px;
            line-height: 1.16666;
          }
        }
      }
      .right__slider {
        padding: 72% 50%;
      }
    }
  }
  @media screen and (max-width: 425px) {
    padding-top: 190px;
    .side__slider {
      .left__slider {
        .reason--using {
          .card__items {
            opacity: 1;
          }
        }
      }
      .right__slider {
        padding: 0;
        min-height: 30rem;
        .group--text {
          min-width: 285px;
          p {
            &:first-of-type {
              font-size: 18px;
              line-height: 1.6666;
              text-align: center;
            }
            &:last-of-type {
              text-align: center;
              font-size: 16px;
              line-height: 2.307;
              font-family: RubikMedium;
              text-align: center;
            }
          }
        }
      }
    }
  }
`;

export { LandingPageStyle };
