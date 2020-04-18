import styled from '@emotion/styled';

interface CartItemStyleProps {
  imgUrl?: string;
}
const CartListStyle = styled.div`
  width: 100%;
`;
const CartItemStyle = styled.div<CartItemStyleProps>`
  position: relative;
  border: 1px solid #dddddd;
  background: transparent;
  min-height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 22px 0px;
  /* padding: 0.5em; */
  border-radius: 4px;
  &:hover {
    background: rgba(189, 189, 189, 0.1);
  }
  .img-item {
    height: 70px;
    width: 70px;
    min-height: 70px;
    min-width: 70px;
    margin-right: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background: url(${props => props.imgUrl});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .label {
    color: #898a8f;
    font-size: 13px;
    line-height: 24px;
    max-width: 9.5rem;
    word-wrap: break-word;
  }
  .info {
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    .price {
      font-family: RubikMedium;
      font-size: 12px;
      line-height: 24px;
    }
    button {
      margin: 0 1rem;
      border: none;
      background: #fff;
      border-radius: 4px;
      height: 25px;
      width: 25px;
      cursor: pointer;
      font-size: 1.2em;
    }
  }
`;

export { CartListStyle, CartItemStyle };
