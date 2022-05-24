import React from "react";
import { Box, Typography } from "components";
import { Button } from "components/atoms";
import { useSelector } from "react-redux";
import { useAppDispatch } from "state/hooks";
import { postBuyRequestActions } from "state/sagasActions";
import { selectBikesCart } from "state/selectors";
import styled from "styled-components/macro";
import { theme } from "styles/theme";
import Carousel from "./sections/carousel/Carousel";
import { navigate } from "gatsby";

const Checkout: React.FC = () => {
  const bikesCart = useSelector(selectBikesCart);
  const dispatch = useAppDispatch();

  const handleBuyClick = () => {
    dispatch(postBuyRequestActions(bikesCart));
    navigate("/success");
  };

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
        <Button variant='primarySM' color='white' onClick={handleBuyClick}>
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
