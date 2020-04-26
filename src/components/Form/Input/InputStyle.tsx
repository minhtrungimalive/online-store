import styled from '@emotion/styled';

interface InputStyle {
  isFocus?: boolean;
  isHasValue?: boolean;
  offsetTopMoved?: string;
}

const InputStyle = styled.div<InputStyle>`
  position: relative;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  background: #fff;
  input {
    outline: none;
    width: 100%;
    border: none;
    border-radius: 4px;
    padding: 20px 20px 10px 20px;
    font-family: RubikMedium;
    font-size: 14px;
  }
  span {
    position: absolute;
    top: ${props => (props.isFocus || props.isHasValue ? (props.offsetTopMoved ? props.offsetTopMoved : '15px') : '35%')};
    left: 20px;
    color: #a5a7ad;
    transition: top 0.3s, font-size 0.3s ease;
    font-size: ${props => (props.isFocus || props.isHasValue ? '10px' : '14px')};
  }
`;
export { InputStyle };
