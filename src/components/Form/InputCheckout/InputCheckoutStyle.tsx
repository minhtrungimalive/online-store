import styled from '@emotion/styled';

interface InputCheckoutStyleProps {
  isFocus?: boolean;
  isHasValue?: boolean;
  offsetTopMoved?: string;
  left?: string;
}

const InputCheckoutStyle = styled.div<InputCheckoutStyleProps>`
  position: relative;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #cfd1d6;
  background: #fff;
  input {
    outline: none;
    width: 100%;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 15px;
    line-height: 24px;
  }
  span {
    position: absolute;
    color: #898a8f;
    line-height: 24px;
    font-size: 15px;
  }
`;
export { InputCheckoutStyle };
