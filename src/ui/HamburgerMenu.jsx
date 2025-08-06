import { useState } from "react";
import styled, { css } from "styled-components";
import Sidebar from "./Sidebar";
import { useDarkMode } from "../context/DarkModeContext";

const StyledHamburgerButton = styled.button`
  position: fixed;
  width: 20px;
  height: 15px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1100;
  top: 35px;
  left: 35px;

  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    border-radius: 2px;
    opacity: 1;
    left: 0;
    transition: all 0.3s ease;
  }

  span:nth-child(1) {
    top: 0;
  }
  span:nth-child(2) {
    top: 6px;
  }
  span:nth-child(3) {
    top: 13px;
  }

  &.open span:nth-child(1) {
    top: 13px;
    transform: rotate(45deg);
  }
  &.open span:nth-child(2) {
    opacity: 0;
  }
  &.open span:nth-child(3) {
    top: 13px;
    transform: rotate(-45deg);
  }

  &:hover span {
    background: #007bff;
  }

  &:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }
  ${(props) =>
    props.isDarkMode
      ? css`
          span {
            background: #c1c1c1;
          }
        `
      : css`
          span {
            background: #333;
          }
        `}
`;

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { isDarkMode } = useDarkMode();

  return (
    <>
      <StyledHamburgerButton
        className={isOpen ? "open" : ""}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        isDarkMode={isDarkMode}
      >
        <span />
        <span />
        <span />
      </StyledHamburgerButton>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default HamburgerMenu;
