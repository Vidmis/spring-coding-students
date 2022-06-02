import {
  Box,
  ContentWrapper,
  Navigation,
  SectionWrapper,
  Typography,
} from "components";
import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ROUTES } from "consts";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { navigate } from "gatsby";
import styled from "styled-components/macro";
import { theme } from "styles/theme";

const Success: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(ROUTES.HOME);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SuccessStyled>
      <SectionWrapper p={{ _: "s24", mdTablet: "s64" }}>
        <Navigation isMenuVisible={false} />
        <ContentWrapper
          display='flex'
          flexDirection='column'
          alignItems='center'
        >
          <Typography type='h4' color='dark' fontSize='fs48' mt={{ _: "s64" }}>
            Your purchase is done!
          </Typography>
          <Typography
            type='h4'
            color='primary'
            fontSize='fs32'
            mt={{ _: "s32" }}
          >
            Have FUN! <FontAwesomeIcon icon={faHeart} className='iconHeart' />
          </Typography>
        </ContentWrapper>
      </SectionWrapper>
    </SuccessStyled>
  );
};

export default Success;

const SuccessStyled = styled(Box)`
  .iconHeart {
    margin-left: 0.5rem;
    path {
      color: ${theme.colors.primary};
    }
  }
`;
