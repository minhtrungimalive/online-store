import React from 'react';
import { Global, css } from '@emotion/core';

const GlobalStyle: React.FunctionComponent<{}> = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: RubikBlack;
          src: url('/Rubik-Black.ttf') format('truetype');
        }
        @font-face {
          font-family: RubikBlackItalic;
          src: url('/Rubik-BlackItalic.ttf') format('truetype');
        }
        @font-face {
          font-family: RubikBold;
          src: url('/Rubik-Bold.ttf') format('truetype');
        }
        @font-face {
          font-family: RubikBoldItalic;
          src: url('/Rubik-BoldItalic.ttf') format('truetype');
        }
        @font-face {
          font-family: RubikItalic;
          src: url('/Rubik-Italic.ttf') format('truetype');
        }
        @font-face {
          font-family: RubikLight;
          src: url('/Rubik-Light.ttf') format('truetype');
        }
        @font-face {
          font-family: RubikLightItalic;
          src: url('/Rubik-LightItalic.ttf') format('truetype');
        }
        @font-face {
          font-family: RubikMedium;
          src: url('/Rubik-Medium.ttf') format('truetype');
        }
        @font-face {
          font-family: RubikMediumItalic;
          src: url('/Rubik-MediumItalic.ttf') format('truetype');
        }
        @font-face {
          font-family: RubikRegular;
          src: url('/Rubik-Regular.ttf') format('truetype');
        }
        body {
          font-family: RubikRegular;
          color: #1e2433;
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          *::before,
          *::after {
            box-sizing: border-box;
          }
        }
        :root {
          font-size: 16px;
        }
      `}
    />
  );
};

export default GlobalStyle;
