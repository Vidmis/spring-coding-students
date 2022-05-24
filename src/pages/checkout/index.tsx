import React from "react";
import { Box, ContentWrapper, SectionWrapper, Typography } from "components";
import { Button } from "components/atoms";
import { useSelector } from "react-redux";
import { useAppDispatch } from "state/hooks";
import { postBuyRequestActions } from "state/sagasActions";
import { selectBikesCart } from "state/selectors";
import styled from "styled-components/macro";
import { theme } from "styles/theme";
import Carousel from "./sections/carousel/Carousel";
import { navigate } from "gatsby";
import { desktop, laptop, mdTablet } from "styles/breakpoints";

const Checkout: React.FC = () => {
  const bikesCart = useSelector(selectBikesCart);
  const dispatch = useAppDispatch();

  const handleBuyClick = () => {
    dispatch(postBuyRequestActions(bikesCart));
    navigate("/success");
  };

  console.log(bikesCart);

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
              type='link'
              fontWeight='fw600'
              color={{ _: "primary", mdTablet: "white" }}
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

    /* @media ${mdTablet} {
      left: -60rem;
    } */

    @media ${laptop} {
      display: block;
      left: -52rem;
    }
    @media ${desktop} {
      left: -40rem;
    }
  }
`;
