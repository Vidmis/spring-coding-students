import React from "react";
import { Box, Navigation } from "components";
import Header from "./sections/header/Header";
import styled from "styled-components/macro";
import { theme } from "styles/theme";
import { mobile, smMobile, tablet } from "styles/breakpoints";

const Home: React.FC = () => {
  return (
    <>
      <StyledHeader
        px={{ _: "s10", laptop: "s80" }}
        position='relative'
        height='100vh'
        width='100%'
        overflow='hidden'
        backgroundColor='lightGray'
        zIndex='-20'
      >
        <Navigation />
        <Header />
      </StyledHeader>
    </>
  );
};

export default Home;

const StyledHeader = styled(Box)`
  .background-layer {
    transform: rotate(19deg);
    box-shadow: -10px 0px 50px ${theme.colors.gray};
    top: -1rem;
    left: 17rem;
    z-index: -10;

    @media ${smMobile} {
      top: 0rem;
      right: -1rem;
    }

    @media ${tablet} {
      /* right: -32.8rem; */
      /* left: 2rem; */
      transform: rotate(12deg);
    }
  }
  .specs {
    transform: rotate(-19deg);
    @media ${tablet} {
      transform: rotate(-12deg);
    }
  }
`;
