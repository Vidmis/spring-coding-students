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
    <Typography
      type='body14'
      fontWeight='fw700'
      fontSize={{ _: "fs12", laptop: "fs14", desktop: "fs14" }}
      lineHeight={{ _: "xsMob", laptop: "s", desktop: "m" }}
      fontStyle='italic'
      color={headerColor}
    >
      {header}
    </Typography>
    <Typography
      type='h6'
      fontSize={{ _: "fs24", laptop: "fs32", desktop: "fs36" }}
      color={specsColor}
    >
      {specs}
    </Typography>
  </Box>
);

const Header: React.FC = () => {
  return (
    <>
      <ContentWrapper
        display={{ _: "flex", tablet: "block" }}
        flexDirection='column'
        alignItems='center'
      >
        <Box
          className='banner-box'
          padding='s16'
          mt={{ _: "s48", mobile: "s16", laptop: "s64", desktop: "s160" }}
          mb={{ _: "s48", laptop: "s32", desktop: "s48" }}
          width={{ _: "auto", laptop: "36rem", desktop: "43rem" }}
          position='relative'
          zIndex='10'
          backgroundColor='transparent'
          borderRadius='b24'
        >
          <Typography
            type='h1'
            fontSize={{ _: "fs36", laptop: "fs48", desktop: "fs60" }}
            lineHeight={{ _: "sMob", laptop: "m", desktop: "xl" }}
            color='dark'
            fontWeight='fw900'
          >
            You are one ride away,
            <Typography
              type='h1'
              mt={{ _: "s10", laptop: "s0" }}
              fontSize={{ _: "fs36", laptop: "fs48", desktop: "fs60" }}
              lineHeight={{ _: "sMob", laptop: "m", desktop: "xl" }}
              color='primary'
              fontWeight='fw900'
            >
              from a good mood.
            </Typography>
          </Typography>
          <Typography
            type='body24'
            fontSize={{ _: "fs14", laptop: "fs18", desktop: "fs24" }}
            mt='s16'
            color='gray'
            maxWidth='30rem'
          >
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

      <Box
        className='background-layer'
        position='absolute'
        backgroundColor='primary'
        minWidth='96rem'
        height='200rem'
        maxWidth='100%'
      >
        <Box
          className='specs'
          position='absolute'
          top={{
            _: "42rem",
            // mobile: "3rem",
            laptop: "44rem",
            desktop: "54rem",
          }}
          right='82rem'
        >
          <Box
            display='flex'
            justifyContent='space-between'
            width='24rem'
            ml={{ _: "s16", tablet: "s32" }}
          >
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

          <Box
            display='flex'
            justifyContent='space-between'
            width='21rem'
            mr='s96'
          >
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
      <Box
        position='absolute'
        top={{ _: "8rem", laptop: "12rem" }}
        right={{ _: "5rem", laptop: "-10rem", desktop: "18rem" }}
        zIndex='5'
        display={{ _: "none", laptop: "block" }}
      >
        <Image src='roadBikeImg' alt='road_bike' width='40rem' />
      </Box>
      <Box
        position='absolute'
        top='9rem'
        right='-9rem'
        zIndex='1'
        display={{ _: "none", desktop: "block" }}
      >
        <Image src='mtbBikeImg' alt='mtb_bike' width='24rem' />
      </Box>
    </>
  );
};

export default Header;

const StyledHeader = styled(Box)`
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
