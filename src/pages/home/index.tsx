import { Box, ContentWrapper, Navigation } from "components";

import Header from "./sections/Header";
import React from "react";
import { mdTablet } from "styles/breakpoints";
import styled from "styled-components/macro";
import { theme } from "styles/theme";

const Home: React.FC = () => {
  return (
    <>
      <StyledHeader height='100vh'>
        <ContentWrapper
          px={{ _: "s0", mdTablet: "s128" }}
          position='relative'
          overflow='hidden'
          height='100vh'
        >
          <Box className='background-layer'></Box>
          <Navigation isMenuVisible={true} />
          <Header />
        </ContentWrapper>
      </StyledHeader>
    </>
  );
};

export default Home;

const StyledHeader = styled(Box)`
  .background-layer {
    position: absolute;
    width: 67rem;
    height: 200rem;
    top: -4rem;
    right: -43rem;
    background-color: ${theme.colors.primary};
    box-shadow: -10px 0px 50px ${theme.colors.gray};
    transform: rotate(10deg);
    z-index: -100;

    @media ${mdTablet} {
      right: -19rem;
    }
    .specs {
      transform: rotate(-19deg);
    }
  }
`;
