import styled from '@emotion/styled';

interface SideNavigationStyleProps {
  direction?: 'left' | 'right';
}

const SideNavigationStyle = styled.div<SideNavigationStyleProps>`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  ${props => (props.direction === 'left' ? 'left: 0' : 'right: 0')};
  background-color: #f5f5f5;
  overflow-x: hidden;
  transition: 0.3s;

  &.active--nav {
    width: 371px;
  }

  @media only screen and (max-width: 768px) {
    &.active--nav {
      width: 100% !important;
    }
  }
`;

export { SideNavigationStyle };
