import React from "react";
import { Box, Navigation } from "components";
import Header from "./sections/header/Header";
import styled from "styled-components/macro";
import { theme } from "styles/theme";

const Home: React.FC = () => {
  return (
    <>
      <StyledHeader>
        <Navigation />
        <Header />
      </StyledHeader>
    </>
  );
};

export default Home;

const StyledHeader = styled(Box)``;
