import React from 'react';
import { css } from '@emotion/core';
import { FadeLoader } from 'react-spinners';

interface LoadingState {
  isShow: boolean;
}

class Loading extends React.Component<{}, LoadingState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isShow: false,
    };
    this.showLoading = this.showLoading.bind(this);
    this.hideLoading = this.hideLoading.bind(this);
  }

  showLoading() {
    this.setState({
      isShow: true,
    });
  }

  hideLoading() {
    this.setState({
      isShow: false,
    });
  }

  render() {
    const { isShow } = this.state;
    return (
      <div
        css={css`
          position: fixed;
          top: 0;
          left: 0;
          z-index: 2;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          display: ${isShow ? 'flex' : 'none'};
          justify-content: center;
          align-items: center;
          .spinner {
            transform: translateY(-4em);
          }
        `}
      >
        <div className="spinner">
          <FadeLoader color="#fff" />
        </div>
      </div>
    );
  }
}

export default Loading;
