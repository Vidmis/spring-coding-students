import React from "react";
import styled from "styled-components/macro";
import { Box, Image, Navigation, Typography } from "components";
import { theme } from "styles/theme";

interface SpecsBoxProps {
  header?: string;
  specs?: string;
  color?: string;
}

const SpecsBox: React.FC<SpecsBoxProps> = ({ header, specs, color }) => (
  <Box>
    <Typography type='body14' fontWeight='fw700' color={color}>
      {header}
    </Typography>
    <Typography type='h4'>{specs}</Typography>
  </Box>
);

const Header: React.FC = () => {
  return (
    <>
      <StyledHeader
        position='relative'
        height='100vh'
        width='100%'
        overflow='hidden'
      >
        <Navigation />
        <Box
          className='layer'
          position='absolute'
          backgroundColor='primary'
          minWidth='96rem'
          height='200rem'
          maxWidth='100%'
        ></Box>
        <Box position='absolute' top='12rem' right='6rem'>
          <Image src='bikeLandingImg' alt='bike' />
        </Box>

        <Box position='absolute' bottom='2rem' right='24rem'>
          <Box
            display='flex'
            justifyContent='space-between'
            width='32rem'
            ml='s48'
          >
            <SpecsBox header='Battery Range' specs='70 Km' color='gray' />
            <Box>
              <Typography type='body14' fontWeight='fw700' color='dark'>
                Charging Time
              </Typography>
              <Typography type='h4' color='white'>
                3.5 Hours
              </Typography>
            </Box>
          </Box>

          <Box display='flex' justifyContent='space-between' width='32rem'>
            <Box>
              <Typography type='body14' fontWeight='fw700' color='gray'>
                Assist Speed
              </Typography>
              <Typography type='h4'>25 Kmph</Typography>
            </Box>
            <Box>
              <Typography type='body14' fontWeight='fw700' color='dark'>
                Weight
              </Typography>
              <Typography type='h4' color='white'>
                8.4 Kg
              </Typography>
            </Box>
          </Box>
        </Box>
      </StyledHeader>
    </>
  );
};

export default Header;

const StyledHeader = styled(Box)`
  .layer {
    transform: rotate(19deg);
    top: 0;
    box-shadow: -10px 0px 50px ${theme.colors.gray};
    right: -40.4rem;
    z-index: -10;
  }
`;
