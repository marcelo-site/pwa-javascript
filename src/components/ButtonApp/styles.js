import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 2;
  right: 2%;
  width: auto !important;
  z-index: 999999999;

  & button {
    font-weight: 500;
    padding: 0.3rem 0.9rem;
    background-color: white;
    color: #000;
    border-radius: 4px;
    transition: all 0.3s;
    border: none;
  }

  & button:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;
