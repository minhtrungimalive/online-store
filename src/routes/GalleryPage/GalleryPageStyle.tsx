import styled from '@emotion/styled';

interface GalleryPageStyleProps {
  isShowMorePhoto?: boolean;
}

const GalleryPageStyle = styled.div<GalleryPageStyleProps>`
  background: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
  min-height: 45rem;
  overflow: ${props => (props.isShowMorePhoto ? 'hidden' : 'auto')};

  .main--open--nav {
    margin-right: 30px;
  }
`;

export { GalleryPageStyle };
