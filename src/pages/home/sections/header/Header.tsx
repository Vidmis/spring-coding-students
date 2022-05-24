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
    <Typography>{header}</Typography>
    <Typography>{specs}</Typography>
  </Box>
);

const Header: React.FC = () => {
  return (
    <>
      <ContentWrapper>
        <Box className='banner-box'>
          <Typography type='h1'>
            You are one ride away,
            <Typography type='h1'>from a good mood.</Typography>
          </Typography>
          <Typography type='body24'>
            Join the revolution to make a difference for your life and the
            environment.
          </Typography>
        </Box>

        <Box className='quiz-box'>
          <Button
            onClick={() => {
              navigate("/quiz");
            }}
            variant='primary'
            mr='s32'
          >
            Take Quiz
          </Button>
        </Box>
      </ContentWrapper>

      <Box className='background-layer'>
        <Box className='specs'>
          <Box>
            <SpecsBox
              header='Gravel & Trails'
              specs='GRAVEL'
              headerColor='gray'
              specsColor='primary'
            />
            <SpecsBox
              header='Lightweight & Fast'
              specs='ROAD'
              headerColor='dark'
              specsColor='white'
            />
          </Box>

          <Box>
            <SpecsBox
              header='City roads'
              specs='HYBRID'
              headerColor='gray'
              specsColor='primary'
            />
            <SpecsBox
              header='Off-road'
              specs='MTB'
              headerColor='dark'
              specsColor='white'
            />
          </Box>
        </Box>
      </Box>
      <Box>
        <Image src='roadBikeImg' alt='road_bike' />
      </Box>
      <Box>
        <Image src='mtbBikeImg' alt='mtb_bike' />
      </Box>
    </>
  );
};

export default Header;

const StyledHeader = styled(Box)``;
