import styled from '@emotion/styled';

interface ImageIconStyleProps {
  isButton: boolean;
  width?: number;
  height?: number;
}

const ImageIconStyle = styled.div<ImageIconStyleProps>`
  margin: 0 1em;
  width: 2em;
  height: 2em;
  cursor: ${props => (props.isButton ? 'pointer' : 'default')};
  width: ${props => props.width}rem;
  height: ${props => props.height}rem;
  margin-right: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
  }
`;

export { ImageIconStyle };
