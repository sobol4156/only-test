import { createGlobalStyle } from "styled-components";

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: "PT Sans";
    src: url("/fonts/PTSans-Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "PT Sans";
    src: url("/fonts/PTSans-Italic.woff2") format("woff2");
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: "PT Sans";
    src: url("/fonts/PTSans-Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "PT Sans";
    src: url("/fonts/PTSans-BoldItalic.woff2") format("woff2");
    font-weight: 700;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: "Bebas Neue";
    src: url("/fonts/BebasNeue-Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  :root {
    --font-main: "PT Sans", sans-serif;
    --font-title: "Bebas Neue", sans-serif;
  }

  body {
    font-family: var(--font-main);
  }
`;