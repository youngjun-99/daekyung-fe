import { createGlobalStyle } from "styled-components";

import PretendardBlack from "/fonts/Pretendard-Black.woff2";
import PretendardExtraBold from "/fonts/Pretendard-ExtraBold.woff2";
import PretendardBold from "/fonts/Pretendard-Bold.woff2";
import PretendardSemiBold from "/fonts/Pretendard-SemiBold.woff2";
import PretendardMedium from "/fonts/Pretendard-Medium.woff2";
import PretendardRegular from "/fonts/Pretendard-Regular.woff2";
import PretendardLight from "/fonts/Pretendard-Light.woff2";
import PretendardExtraLight from "/fonts/Pretendard-ExtraLight.woff2";
import PretendardThin from "/fonts/Pretendard-Thin.woff2";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    font-weight: 900;
    font-display: swap;
    src: local('Pretendard Black'), 
         url(${PretendardBlack}) format('woff2'),
         url('/fonts/Pretendard-Black.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    font-display: swap;
    src: local('Pretendard ExtraBold'), 
         url(${PretendardExtraBold}) format('woff2'),
         url('/fonts/Pretendard-ExtraBold.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-display: swap;
    src: local('Pretendard Bold'), 
         url(${PretendardBold}) format('woff2'),
         url('/fonts/Pretendard-Bold.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-display: swap;
    src: local('Pretendard SemiBold'), 
         url(${PretendardSemiBold}) format('woff2'),
         url('/fonts/Pretendard-SemiBold.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-display: swap;
    src: local('Pretendard Medium'), 
         url(${PretendardMedium}) format('woff2'),
         url('/fonts/Pretendard-Medium.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-display: swap;
    src: local('Pretendard Regular'), 
         url(${PretendardRegular}) format('woff2'),
         url('/fonts/Pretendard-Regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    font-display: swap;
    src: local('Pretendard Light'), 
         url(${PretendardLight}) format('woff2'),
         url('/fonts/Pretendard-Light.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 200;
    font-display: swap;
    src: local('Pretendard ExtraLight'), 
         url(${PretendardExtraLight}) format('woff2'),
         url('/fonts/Pretendard-ExtraLight.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 100;
    font-display: swap;
    src: local('Pretendard Thin'), 
         url(${PretendardThin}) format('woff2'),
         url('/fonts/Pretendard-Thin.woff') format('woff');
  }

  /* Reset CSS */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    font-family: 'Pretendard';
    background-color: ${(props) => props.theme.colors.background || "#ffffff"};
    color: ${(props) => props.theme.colors.text || "#000000"};
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Global styles */
  html {
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button, input, select, textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  /* Additional global styles */
  ::selection {
    background-color: ${(props) =>
      props.theme.colors.primary[500] || "#0000FF"};
    color: #ffffff;
  }

  /* Scrollbar styles (for WebKit browsers) */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.gray[100] || "#f1f1f1"};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.gray[400] || "#888"};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.gray[600] || "#555"};
  }
`;

export default GlobalStyles;
