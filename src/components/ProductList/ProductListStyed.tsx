import styled from '@emotion/styled';

const ProductListStyled = styled.div`
  width: 100%;
  .column {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
    .item {
      padding-left: 15px;
      padding-right: 15px;
      margin: 15px 0;
    }

    &.column-5 {
      .item {
        width: 25%;

        .product {
          width: 100%;
        }
      }
    }
  }
`;

export default ProductListStyled;
