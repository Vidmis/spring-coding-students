import { Box, ContentWrapper, Typography } from "components";
import React, { useEffect } from "react";
import { desktop, laptop } from "styles/breakpoints";
import { useAppDispatch, useAppSelector } from "state/hooks";

import { Button } from "components/atoms";
import Carousel from "./sections/Carousel";
import { ROUTES } from "consts";
import { navigate } from "gatsby";
import { postBuyRequestActions } from "state/sagasActions";
import { selectBikesCart } from "state/selectors";
import { setResetCart } from "state/features/userBikesCartSlice";
import styled from "styled-components/macro";
import { theme } from "styles/theme";

const Checkout: React.FC = () => {
  const bikesCart = useAppSelector(selectBikesCart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setResetCart());
  }, []);

  const handleBuyClick = () => {
    if (bikesCart.length > 0) {
      dispatch(postBuyRequestActions(bikesCart));
      dispatch(setResetCart());
      navigate(ROUTES.SUCCESS);
    }
  };

  return (
    <>
      <ContentWrapper position='relative' overflow='hidden' height='100vh'>
        <ContentWrapper
          px={{ _: "s16" }}
          mx={{ _: "s0", smTablet: "s48" }}
          overflow={{ _: "unset", mdTablet: "hidden" }}
        >
          <Box
            className='navigation'
            m='s32'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
          >
            <Typography
              type='Link'
              fontWeight='fw600'
              color={{ _: "primary", laptop: "white" }}
              onClick={() => navigate(ROUTES.HOME)}
            >
              KILO.RIDE
            </Typography>
            <Button
              width={{ _: "5rem" }}
              height={{ _: "1.8rem" }}
              fontSize={{ _: "fs14" }}
              variant='custom'
              color='white'
              backgroundColor='primary'
              onClick={handleBuyClick}
            >
              {bikesCart.length} Buy
            </Button>
          </Box>
          <Carousel />
        </ContentWrapper>
        <StyledCheckout>
          <Box className='background-layer'></Box>
        </StyledCheckout>
      </ContentWrapper>
    </>
  );
};

export default Checkout;

const StyledCheckout = styled(Box)`
  .background-layer {
    position: absolute;
    background-color: ${theme.colors.primary};
    width: 96rem;
    height: 200rem;
    transform: rotate(351deg);
    top: -4rem;
    box-shadow: -10px 0px 50px ${theme.colors.gray};
    left: -4rem;
    z-index: -10;
    display: none;

    @media ${laptop} {
      display: block;
      left: -52rem;
    }
    @media ${desktop} {
      left: -40rem;
    }
  }
`;
