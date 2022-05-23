import {
  Box,
  ContentWrapper,
  Image,
  SectionWrapper,
  Typography,
} from "components";
import { Button } from "components/atoms";
import React from "react";
import { useSelector } from "react-redux";
import { selectBikesCart } from "state/selectors";
import styled from "styled-components/macro";
import { theme } from "styles/theme";
import Carousel from "./sections/carousel/Carousel";

const Checkout: React.FC = () => {
  const bikesCart = useSelector(selectBikesCart);

  console.log(bikesCart);

  return (
    <Box position='relative' overflow='hidden' height='100vh'>
      <Box
        p='s16'
        mt='s16'
        mx='s32'
        display='flex'
        justifyContent='space-between'
      >
        <Typography type='link' fontWeight='fw600' color='white'>
          KILO.RIDE
        </Typography>
        <Button variant='primarySM' color='white'>
          {bikesCart.length} Buy
        </Button>
      </Box>
      <Carousel />
      <StyledCheckout>
        <Box
          className='layer'
          position='absolute'
          backgroundColor='primary'
          minWidth='96rem'
          height='200rem'
          maxWidth='100%'
        ></Box>
      </StyledCheckout>
    </Box>
  );
};

export default Checkout;

const StyledCheckout = styled(Box)`
  .layer {
    transform: rotate(351deg);
    top: 0;
    box-shadow: -10px 0px 50px ${theme.colors.gray};
    left: -42.8rem;
    z-index: -10;

    .specs {
      transform: rotate(-19deg);
    }
  }
`;
