import styled from '@emotion/styled';

interface GridItemStyleProps {
  isAdded: boolean;
}

const GridItemStyle = styled.div<GridItemStyleProps>`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin: 1.5rem 1rem;
  cursor: pointer;

  .back--drop {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: calc(100% - 4px);
    transition: all 0.3s;
    background: transparent;
  }
  img {
    max-width: 100%;
    width: 100%;
    opacity: 1;
  }

  &:hover {
    .back--drop {
      background-color: rgba(0, 0, 0, 0.29);
    }

    &.main--img {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }
  }

  .btn-group {
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    display: flex;

    .outline-btn {
      outline: none;
      cursor: pointer;
      background: ${props => (props.isAdded ? '#fff' : 'transparent')};
      border: 1px solid #e7e8e9;
      color: ${props => (props.isAdded ? '#1c2232' : '#e7e8e9')};
      border-radius: 4px;
      font-weight: 500;
      font-size: 10px;
      padding: 10px;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      .btn-label {
        margin-top: 2px;
      }
      .remove-icon {
        width: 8.18px;
        height: 6.5px;
        margin: 0;
        margin-right: 5px;
      }
      .add-icon {
        width: 8.18px;
        height: 6.5px;
        margin: 0;
        margin-right: 5px;
      }
      &.show-more {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        background: transparent;
        color: #e7e8e9;
        .plus-icon {
          margin: 0;
          width: 9.72px;
          height: 9.72px;
          cursor: pointer;
        }
      }
    }
  }
  &:hover {
    .btn-group {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
  }
`;

export { GridItemStyle };
