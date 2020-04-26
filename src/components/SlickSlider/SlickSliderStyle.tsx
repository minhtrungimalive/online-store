import styled from '@emotion/styled';

const SlickSliderStyle = styled.div`
  box-sizing: border-box;
  width: 100%;
  outline: none;

  .center {
    margin: 0 -60%;
    padding: 0 30%;

    .slick-track {
      display: flex;
      align-items: center;
    }

    .slick-slide {
      padding: 0;
      opacity: 1;
      transition: all 0.3s ease;
      &:not(.slick-current) {
        opacity: 0.5;
        padding: 0 3em;
      }
    }

    .slick-prev,
    .slick-next {
      z-index: 1;
      top: 100%;
      background-color: #fff !important;
      width: 1.5em;
      height: 1.5em;
      font-size: 2em;
      border-radius: 4px;
      box-shadow: 0 0 0.05em 0.05em #dfdfdf;
      display: flex !important;
      align-items: center;

      svg {
        color: #000;
        width: 100%;
        height: 50%;
        font-size: 0.5em;
        z-index: 1;
      }
    }

    .slick-prev::before,
    .slick-next::before {
      font-size: 1em;
      content: none;
    }

    .slick-prev {
      left: 50%;
      margin-left: -1.7em;
    }

    .slick-next {
      right: 50%;
      margin-right: -1.7em;
    }
  }

  @media only screen and (max-width: 1024px) and (min-width: 993px) {
    .center {
      padding: 0 !important;
      margin: 0 !important;
    }
  }

  @media only screen and (max-width: 992px) and (min-width: 769px) {
    .center {
      padding: 0;
      margin: 0;
    }
  }

  @media only screen and (max-width: 768px) and (min-width: 569px) {
    .center {
      padding: 0;
      margin: 0;
    }
  }

  @media only screen and (max-width: 568px) and (min-width: 320px) {
    .center {
      padding: 0;
      margin: 0;
    }
  }
`;

export { SlickSliderStyle };
