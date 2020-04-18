import styled from '@emotion/styled';

interface CardStyleProps {
  hasHoverEffect?: boolean;
}
const hoverEffect = `
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.19);
  background: #fff;
  opacity: 1;
  transition: all 0.3s ease-in-out;
`;
const CardStyle = styled.div<CardStyleProps>`
  &.active {
    ${hoverEffect}
  }
  p {
    span {
      font-family: RubikBold;
    }
  }
  max-width: 28.125em;
  width: 100%;
  height: 100%;
  padding: 10px 30px;
  margin: 10px;
  border-radius: 18px;
  background: transparent;
  border: none;
  transition: all 0.3s ease-out;
  opacity: 0.5;
  p {
    padding-left: 0.5rem;
    padding-right: 2rem;
  }
  ${props => {
    return props.hasHoverEffect ? `&:hover {${hoverEffect}}` : `${hoverEffect}`;
  }}
`;

export { CardStyle };
