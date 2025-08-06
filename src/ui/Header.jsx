import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import HamburgerMenu from "./HamburgerMenu";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;
`;

const StyledDiv = styled.div`
  display: flex;
  column-gap: 2rem;
`;

const Header = ({ isNotComputer }) => {
  if (isNotComputer) {
    return (
      <StyledHeader>
        <div>
          <HamburgerMenu />
        </div>
        <StyledDiv>
          <UserAvatar />
          <HeaderMenu />
        </StyledDiv>
      </StyledHeader>
    );
  }

  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
};

export default Header;
