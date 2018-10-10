import React, { Component } from "react";
import Header from "../components/Header";

const StyledPage = styled.div`
  background: white;
  color: black;
`;

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

class Page extends Component {
  render() {
    return (
      <StyledPage>
        <Header />
        <Inner>{this.props.children}</Inner>
      </StyledPage>
    );
  }
}
export default Page;
