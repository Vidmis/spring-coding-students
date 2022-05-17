import React from "react";
import styled from "styled-components/macro";
import { Box, ContentWrapper, Image, Navigation, Typography } from "components";
import { Theme, theme } from "styles/theme";
import { Button } from "components/atoms";
import { navigate } from "gatsby";

interface SpecsBoxProps {
  header?: string;
  specs?: string;
  headerColor?: keyof Theme["colors"];
  specsColor?: keyof Theme["colors"];
}

const SpecsBox: React.FC<SpecsBoxProps> = ({
  header,
  specs,
  headerColor,
  specsColor,
}) => (
  <Box>
    <Typography type='body14' fontWeight='fw700' color={headerColor}>
      {header}
    </Typography>
    <Typography type='h4' color={specsColor}>
      {specs}
    </Typography>
  </Box>
);

const Header: React.FC = () => {
  return (
    <>
      <StyledHeader
        px='s80'
        position='relative'
        height='100vh'
        width='100%'
        overflow='hidden'
      >
        <Navigation />

        <ContentWrapper>
          <Box
            mt='s160'
            maxWidth='46rem'
            position='relative'
            zIndex='10'
            backgroundColor='transparent'
            borderRadius='b24'
            mb='s96'
          >
            <Typography type='h1' color='dark' fontWeight='fw900'>
              Some content,
              <Typography type='h1' color='primary' fontWeight='fw900'>
                some extend
              </Typography>
            </Typography>
            <Typography type='body24' color='gray' maxWidth='30rem'>
              Join the revolution to make a difference for your life and the
              environment.
            </Typography>
          </Box>

          <Box>
            <Button
              onClick={() => {
                navigate("/quiz");
              }}
              variant='primary'
              mr='s32'
            >
              Take Quiz
            </Button>
            <Button variant='secondary'>Learn More</Button>
          </Box>
        </ContentWrapper>

        <Box
          className='layer'
          position='absolute'
          backgroundColor='primary'
          minWidth='96rem'
          height='200rem'
          maxWidth='100%'
        >
          <Box className='specs' position='absolute' top='54rem' right='78rem'>
            <Box
              display='flex'
              justifyContent='space-between'
              width='34rem'
              ml='s96'
            >
              <SpecsBox
                header='Battery Range'
                specs='70 Km'
                headerColor='gray'
                specsColor='primary'
              />
              <SpecsBox
                header='Charging Time'
                specs='3.5 Hours'
                headerColor='dark'
                specsColor='white'
              />
            </Box>

            <Box
              display='flex'
              justifyContent='space-between'
              width='34rem'
              mr='s96'
            >
              <SpecsBox
                header='Assist Speed'
                specs='25 Kmph'
                headerColor='gray'
                specsColor='primary'
              />
              <SpecsBox
                header='Weight'
                specs='8.4 Kg'
                headerColor='dark'
                specsColor='white'
              />
            </Box>
          </Box>
        </Box>
        <Box position='absolute' top='12rem' right='17.5rem' zIndex='5'>
          <Image src='roadBikeImg' alt='road_bike' width='42rem' />
        </Box>
        <Box position='absolute' top='9rem' right='-9rem' zIndex='1'>
          <Image src='mtbBikeImg' alt='mtb_bike' width='26rem' />
        </Box>
      </StyledHeader>
    </>
  );
};

export default Header;

const StyledHeader = styled(Box)`
  .mainContent {
  }
  .layer {
    transform: rotate(19deg);
    top: 0;
    box-shadow: -10px 0px 50px ${theme.colors.gray};
    right: -32.8rem;
    z-index: -10;

    .specs {
      transform: rotate(-19deg);
    }
  }
`;
