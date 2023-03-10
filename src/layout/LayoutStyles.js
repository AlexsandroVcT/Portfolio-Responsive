import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;

  .scroll-to-top-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .scroll-to-top-button.show {
    opacity: 1;
  }
  .scroll-to-top-button:hover {
    color: #cddc39;
  }
`;
