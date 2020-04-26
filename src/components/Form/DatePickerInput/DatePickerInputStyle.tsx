import styled from '@emotion/styled';

interface DatePickerInputStyleProps {
  isFocus?: boolean;
  isHasValue?: boolean;
  offsetTopMoved?: string;
}

const DatePickerInputStyle = styled.div<DatePickerInputStyleProps>`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  position: relative;
  position: relative;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  background: #fff;
  span {
    position: absolute;
    top: ${props => (props.isFocus || props.isHasValue ? (props.offsetTopMoved ? props.offsetTopMoved : '15px') : '35%')};
    left: 20px;
    color: #a5a7ad;
    transition: top 0.3s, font-size 0.3s ease;
    font-size: ${props => (props.isFocus || props.isHasValue ? '10px' : '14px')};
    z-index: 1;
  }
  .react-datepicker-wrapper {
    width: 100%;
    .react-datepicker__input-container {
      input {
        outline: none;
        width: 100%;
        border: none;
        border-radius: 4px;
        padding: 20px 20px 10px 20px;
        font-size: 14px;
        font-family: RubikMedium;
      }
    }
  }
`;

export { DatePickerInputStyle };
