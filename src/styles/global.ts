import styled, { createGlobalStyle } from "styled-components";
import { media } from "./media";

export const GlobalStyles = createGlobalStyle`
    body{
        background: #f4f5f9;
    }
`;

export const Container = styled.div`
  width: 1440px;
  margin: 0 auto;
  border-left: 1px solid rgba(66, 86, 122, 0.1);
  border-right: 1px solid rgba(66, 86, 122, 0.1);

  ${media.xxl} {
    width: 1200px;
  }
  ${media.xl} {
    width: 992px;
  }
  ${media.lg} {
    width: 768px;
  }
  ${media.md} {
    width: 576px;
    border-left: none;
    border-right: none;
  }
  ${media.sm} {
    width: 480px;
  }
  ${media.xs} {
    width: 320px;
  }
`;