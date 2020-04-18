import styled from '@emotion/styled';

interface TextAreaStyleProps {
  isFocus?: boolean;
  isHasValue?: boolean;
  offsetTopMoved?: string;
}

const TextAreaStyle = styled.div<TextAreaStyleProps>`
  position: relative;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  background: #fff;

  textarea {
    outline: none;
    width: 100%;
    border: none;
    border-radius: 4px;
    padding: 20px 20px 10px 20px;
    font-family: RubikMedium;
    font-size: 14px;
    line-height: 1.5;
    resize: none;
  }
  span {
    position: absolute;
    top: ${props => (props.isFocus || props.isHasValue ? (props.offsetTopMoved ? props.offsetTopMoved : '15px') : '15px')};
    left: 20px;
    color: #a5a7ad;
    transition: top 0.3s, font-size 0.3s ease;
    font-size: ${props => (props.isFocus || props.isHasValue ? '0.7rem' : '14px')};
  }
`;
export { TextAreaStyle };
