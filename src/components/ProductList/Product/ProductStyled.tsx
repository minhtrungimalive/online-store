import styled from '@emotion/styled';

const ProducStyled = styled.div`
  position: relative;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  outline: none;
  transition: 0.2s all ease;
  height: 100%;

  .img--product-control {
    height: 100%;
    max-height: 200px;
    text-align: center;
    width: 100%;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .tag--discount-percent {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 60px;
    padding: 5px 10px;
    background-color: #ff0000;
    transform: translate3d(20%, -1px, 0);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    .text--discount-percent {
      color: #ffffff;
      margin-bottom: 0;
    }
  }

  .product--info {
    width: 100%;
    text-align: center;
    .text--name {
      font-size: 18px;
      line-height: 1.2;
      margin-top: 20px;
    }

    .price--box {
      width: 100%;
      margin-top: 15px;
      .text--root-price {
        font-size: 14px;
        font-weight: 500;
        text-decoration: line-through;
      }

      .text--selling-price {
        margin-left: 10px;
        font-size: 16px;
        color: #ff0000;
      }
    }
  }

  .btn--group {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    width: 100%;
    .btn--control {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 35px;
      max-width: 35px;
      max-height: 35px;
      background-color: transparent;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
      margin: 0 5px;
      &:hover {
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
      }
      .img--control {
        height: 100%;
        max-width: 8px;
        max-height: 8px;
        margin: 0;
      }

      svg {
        transform: scale(1.5);
      }
    }
  }
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export default ProducStyled;
