import styled from '@emotion/styled';

const DetailPageStyled = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 15px auto;
  .title {
    font-size: 26px;
    line-height: 1.5;
    font-family: RubikMedium;
  }
  .container {
    width: 100%;
    display: flex;
    flex: 1 0 auto;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
    .img--container {
      display: flex;
      flex: 4;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      max-width: 400px;
      max-height: 460px;

      .img--control {
        max-height: 100%;
        max-width: 100%;
      }
    }
    .product-info {
      display: flex;
      flex: 6;
      flex-direction: column;
      .product-name {
        font-size: 24px;
        line-height: 1.667;
        font-family: RubikMedium;
        width: 100%;
      }
      .product-price {
        width: 100%;
        padding: 10px 0;
        .text--selling-price,
        .text--original-price {
          vertical-align: middle;
        }
        .text--selling-price {
          font-size: 24px;
          font-family: RubikMedium;
          margin-right: 10px;
          color: #ff0000;
        }
        .text--original-price {
          font-size: 18px;
          text-decoration: line-through;
          color: #999999;
        }
      }
      .product-description {
        font-size: 16px;
        line-height: 1.1;
      }
      .btn-control {
        margin-top: 20px;
        width: 100%;
        max-width: 200px;
        padding: 10px;
        cursor: pointer;
        border: 1px solid transparent;
        background-color: #1890ff;
        border-radius: 4px;
        color: #fff;
        font-size: 18px;
        text-transform: uppercase;
        transition: all 0.2s ease;
        &:hover {
          /* opacity: 0.6; */
          background-color: #008ae6;
        }
      }
    }
  }
`;

export { DetailPageStyled };
