import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Nav from "./Nav";

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid puple;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid green;
  }
`;

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-15deg);
  a {
    padding: 0.5rem 1rem;
    background-color: lightgreen;
    color: black;
    text-transform: uppercase;
    text-decoration: none;
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>Company</a>
        </Link>
      </Logo>
      <Nav />
    </div>
  </StyledHeader>
);

export default Header;
