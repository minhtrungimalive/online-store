import styled from '@emotion/styled';

interface SlickItemStyleProps {
  isAdded: boolean;
  imgUrl?: string;
}

const SlickItemStyle = styled.div<SlickItemStyleProps>`
  width: 100% !important;
  box-sizing: border-box;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-image: url(${props => props.imgUrl});
  &:before {
    content: '';
    display: block;
    padding-top: 65%;
  }

  .btn-group {
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    .outline-btn {
      outline: none;
      cursor: pointer;
      background: ${props => (props.isAdded ? '#fff' : 'transparent')};
      border: 1px solid #e7e8e9;
      color: ${props => (props.isAdded ? '#1c2232' : '#E7E8E9')};
      border-radius: 4px;
      font-weight: 400;
      font-size: 0.8rem;
      padding: 10px;
      margin-right: 1rem;
      margin-bottom: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .verify-icon {
      }
    }
  }
  &:hover {
    .btn-group {
      opacity: 1;
      transition: opacity 0.8s ease-in-out;
    }
  }
  transition: all 0.3s ease;
`;

export { SlickItemStyle };
