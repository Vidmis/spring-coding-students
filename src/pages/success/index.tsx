import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Box, Typography } from "components";
import { navigate } from "gatsby";
import { Button } from "components/atoms";
import styled from "styled-components/macro";
import { theme } from "styles/theme";

interface SuccessProps {}

const Success: React.FC<SuccessProps> = () => (
  <SuccessStyled>
    <Box>
      <Typography type='h1' color='primary'>
        Success!!
      </Typography>
      <Button variant='primary' onClick={() => navigate("/")}>
        HOME
        <FontAwesomeIcon icon={faHeart} className='iconHeart' />
      </Button>
    </Box>
  </SuccessStyled>
);

export default Success;

const SuccessStyled = styled(Box)`
  .iconHeart {
    margin-left: 0.5rem;
    path {
      color: ${theme.colors.white};
    }
  }
`;
