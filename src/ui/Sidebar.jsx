import styled, { css } from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3rem 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  ${(props) =>
    props.isNotComputer
      ? css`
          position: fixed;
          top: 0;
          left: 0;
          width: 26rem;
          height: 100vh;
          z-index: 1000;
          box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
        `
      : css`
          grid-row: 1 / -1;
          position: static;
          width: auto;
          height: auto;
          box-shadow: none;
        `}
`;

// PC görünümde sadece burada görünür olacak
const StyledNav = styled.div`
  @media (max-width: 845px) {
    display: none;
  }
`;

const Sidebar = ({ isOpen, setIsOpen }) => {
  const isNotComputer = isOpen && setIsOpen;

  return (
    <StyledSidebar isNotComputer={isNotComputer}>
      {isNotComputer ? (
        <>
          <Logo />
          <MainNav />
          <Uploader />
        </>
      ) : (
        <StyledNav>
          <Logo />
          <MainNav />
          <Uploader />
        </StyledNav>
      )}
    </StyledSidebar>
  );
};

export default Sidebar;
