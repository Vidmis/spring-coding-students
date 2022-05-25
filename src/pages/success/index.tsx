import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Box, ContentWrapper, SectionWrapper, Typography } from "components";
import { navigate } from "gatsby";
import styled from "styled-components/macro";
import { theme } from "styles/theme";

interface SuccessProps {}

const Success: React.FC<SuccessProps> = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SuccessStyled>
      <SectionWrapper p={{ _: "s24", mdTablet: "s64" }}>
        <Typography
          className='logo'
          type='link'
          m={{ _: "s24", mdTablet: "s64" }}
          fontWeight={{ _: "fw600" }}
          color='primary'
          onClick={() => navigate("/")}
        >
          KILO.RIDE
        </Typography>
      </SectionWrapper>
      <ContentWrapper display='flex' flexDirection='column' alignItems='center'>
        <Typography type='h4' color='dark' fontSize='fs48' mt={{ _: "s64" }}>
          Your purchase is done!
        </Typography>
        <Typography type='h4' color='primary' fontSize='fs32' mt={{ _: "s32" }}>
          Have FUN! <FontAwesomeIcon icon={faHeart} className='iconHeart' />
        </Typography>
      </ContentWrapper>
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
