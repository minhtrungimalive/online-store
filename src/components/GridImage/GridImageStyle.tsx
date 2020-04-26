import styled from '@emotion/styled';

interface GridImageStyleProps {
  isOpenNav?: boolean;
}

const GridImageStyle = styled.div<GridImageStyleProps>`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-left: 15px;
  margin-right: ${props => (props.isOpenNav ? '30px' : '15px')};

  .masonry--class {
    margin: 50px 0;
    position: absolute;
    max-width: 1200px;
    width: 100%;
    &.row {
      .column {
        width: 33.3333%;
        .grid--item {
          margin: 10px 15px;
        }
      }
    }
  }

  @media only screen and (max-width: 996px) {
    .masonry--class {
      &.row {
        .column {
          width: ${props => (props.isOpenNav ? '50%' : '33.3333%')};
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .masonry--class {
      &.row {
        .column {
          width: 50%;
        }
      }
    }
  }

  @media only screen and (max-width: 576px) {
    margin-left: 0;
    margin-right: 0;
    .masonry--class {
      &.row {
        margin: 15px 0;
        .column {
          width: 100%;
          .grid--item {
            margin: 30px 0;
          }
        }
      }
    }
  }
`;
export { GridImageStyle };
