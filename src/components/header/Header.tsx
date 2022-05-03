import React from "react";
import { Container } from "components/wrappers/Container";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import { Image } from "components/Image";
import { HeaderStyled } from "./HeaderStyled";
import { Box } from "components";
import { Typography } from "components/typography/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faClockFour,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { BaseButton } from "components/atoms";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderStyled>
      <FlexWrapper borderRadius='b24' backgroundColor='cyan' overflow='hidden'>
        <Container p='s0' width={{ _: "100%", laptop: "50%" }}>
          <FlexWrapper
            minWidth='30rem'
            maxWidth='40rem'
            height='100%'
            flexDirection='column'
            justifyContent='space-between'
            p='s64'
          >
            <Box
              width='10rem'
              height='3rem'
              display='flex'
              justifyContent='space-evenly'
              alignItems='center'
              p='s10'
              borderRadius='bFull'
              backgroundColor='white'
            >
              <Image src='letterImg' alt='letter' width='1rem' height='1rem' />
              <span>Hot Recipes</span>
            </Box>
            <Box>
              <Typography type='h5' color='primary'>
                Spicy delicious chicken wings
              </Typography>
            </Box>
            <Box>
              <Typography color='primary'>
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                ad minim{" "}
              </Typography>
            </Box>
            <FlexWrapper>
              <Box
                width='8rem'
                height='2.5rem'
                display='flex'
                justifyContent='space-evenly'
                alignItems='center'
                p='s10'
                mr='s16'
                borderRadius='bFull'
                backgroundColor='transparent'
              >
                <FontAwesomeIcon icon={faClockFour} />
                <span>30 Minutes</span>
              </Box>

              <Box
                width='8rem'
                height='2.5rem'
                display='flex'
                justifyContent='space-evenly'
                alignItems='center'
                p='s10'
                borderRadius='bFull'
                backgroundColor='transparent'
              >
                <FontAwesomeIcon icon={faUtensils} />
                <span>Chicken</span>
              </Box>
            </FlexWrapper>

            <FlexWrapper justifyContent='space-between' alignItems='center'>
              <Box
                width='10rem'
                height='4.5rem'
                display='flex'
                justifyContent='space-around'
                alignItems='center'
                p='s0'
                borderRadius='bFull'
              >
                <Box width='50px' height='50px'>
                  <Image src='johnImg' alt='profile' />
                </Box>
                <FlexWrapper flexDirection='column'>
                  <Typography fontSize='fs14' fontWeight='fw700'>
                    John Smith
                  </Typography>
                  <Typography fontSize='fs10' fontWeight='fw400'>
                    15 March 2022
                  </Typography>
                </FlexWrapper>
              </Box>

              <BaseButton color='white' height='3rem'>
                <span>View Recipes</span>
                <FontAwesomeIcon icon={faCircleArrowRight} />
              </BaseButton>
            </FlexWrapper>
          </FlexWrapper>
        </Container>

        <Container
          p='s0'
          width={{ _: "100%", laptop: "50%" }}
          display={{ _: "none", laptop: "block" }}
          position='relative'
        >
          <Box
            width='6rem'
            height='6rem'
            position='absolute'
            top='2rem'
            left='-2rem'
          >
            <Image src='badgeImg' alt='badge' />
          </Box>
          <Image src='bakedChickenImg' alt='baked_chicken' />
        </Container>
      </FlexWrapper>
    </HeaderStyled>
  );
};
