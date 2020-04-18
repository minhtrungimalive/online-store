import styled from '@emotion/styled';

const SideNavContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .side-nav-header {
    position: relative;
    min-height: 110px;
    width: 100%;
    padding: 0 2em;
    background-color: #1d2332;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    .close-btn {
      color: #cbd2e3;
      font-size: 48px;
      cursor: pointer;
    }
    .side-nav-logo {
      position: absolute;
      left: 50%;
      margin-left: -35px;
      bottom: -35px;
    }
  }
  .side-nav-body {
    padding: 4rem 2rem 2.5rem 1.5rem;
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-y: hidden;
    .cart--list {
      max-height: 300px;
      height: 100%;
      overflow-y: scroll;
    }
    .expired-label {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: auto;
      border-radius: 4px;
      margin: 0;
      padding-left: 17px;
      padding-right: 17px;
      margin-bottom: 27px;
      .img__icon {
        max-width: 18px;
        width: 100%;
        max-height: 18px;
        height: 100%;
        margin: 0;
      }
      p {
        font-family: RubikMedium;
        font-size: 12px;
        line-height: 24px;
        padding-right: 0;
        span {
          opacity: 0.5;
        }
      }
    }
  }
  .side-nav-footer {
    .purchase-info {
      display: flex;
      text-align: right;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      padding: 2rem;
      .photo-total {
        font-size: 26px;
        line-height: 24px;
        &.count {
          color: #8e9198;
          font-size: 28px;
        }
      }
      .total-label {
        font-size: 15px;
        line-height: 24px;
      }
    }
    .purchase-btn {
      background: #fbca00;
      min-height: 110px;
      display: flex;
      flex-direction: row;
      flex: 1;
      span {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 4;
        font-family: RubikMedium;
        font-size: 17px;
        line-height: 20px;
      }
      .purchase-icon {
        display: flex;
        flex: 2;
        color: #fff;
        font-size: 40px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .arrow-icon {
          width: 23.25px;
          height: 15px;
        }
        &:hover {
          background: #ebba00;
        }
      }
    }
  }
`;
export { SideNavContentStyle };
