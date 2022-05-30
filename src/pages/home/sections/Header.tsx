import { Box, ContentWrapper, Image, Typography } from "components";

import { Button } from "components/atoms";
import React from "react";
import { Theme } from "styles/theme";
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
      type='body16'
      fontWeight='fw600'
      fontStyle='italic'
      color={headerColor}
    >
      {header}
    </Typography>
    <Typography type='body24' fontWeight='fw600' color={specsColor}>
      {specs}
    </Typography>
  </Box>
);

const Header: React.FC = () => {
  return (
    <>
      <ContentWrapper
        p={{ _: "s32" }}
        textAlign={{ _: "center", mdTablet: "unset" }}
      >
        <Box
          className='banner-box'
          my={{ _: "s48" }}
          mx={{ _: "auto", mdTablet: "s0" }}
          px={{ _: "s16", mdTablet: "s0" }}
          py={{ _: "s16", mdTablet: "s48" }}
          maxWidth={{ _: "42rem" }}
          backgroundColor='transparent'
          borderRadius='b8'
        >
          <Typography
            type='h1'
            mb={{ _: "s32" }}
            fontSize={{ _: "fs32", mdTablet: "fs48" }}
            fontWeight={{ _: "fw600" }}
            lineHeight={{ _: "mdMob", mdTablet: "md" }}
            color='dark'
          >
            You are one ride away,
            <Typography
              fontSize={{ _: "fs32", mdTablet: "fs48" }}
              fontWeight={{ _: "fw600" }}
              lineHeight={{ _: "mdMob", mdTablet: "md" }}
              color='primary'
            >
              from a good mood.
            </Typography>
          </Typography>
          <Typography type='body24' color='gray'>
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
            boxShadow='0px 0px 18px -10px black'
          >
            Take Quiz
          </Button>
        </Box>
      </ContentWrapper>

      <Box
        display={{ _: "none", smTablet: "block" }}
        className='specs'
        position='absolute'
        top={{
          _: "40rem",
          mdTablet: "36rem",
          laptop: "32rem",
          desktop: "48rem",
        }}
        right={{
          _: "3.5rem",
          mdTablet: "26.5rem",
          laptop: "27rem",
          desktop: "29rem",
        }}
      >
        <Box
          display={{ _: "flex" }}
          justifyContent='space-between'
          ml='s16'
          width={{ _: "20rem" }}
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
          display={{ _: "flex" }}
          justifyContent='space-between'
          width={{ _: "16rem" }}
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
      <Box
        display={{ _: "none", desktop: "block" }}
        position='absolute'
        top={{ _: "31rem", desktop: "17rem" }}
        right={{ _: "-12rem", desktop: "10rem" }}
        zIndex='-10'
      >
        <Image src='roadBikeImg' alt='road_bike' maxWidth='48rem' />
      </Box>
      <Box
        position='absolute'
        display={{ _: "none", laptop: "block" }}
        top={{ _: "31rem", laptop: "8rem" }}
        right={{ _: "-12rem", laptop: "-12rem" }}
        zIndex='-15'
      >
        <Image src='mtbBikeImg' alt='mtb_bike' maxWidth='32rem' />
      </Box>
    </>
  );
};

export default Header;
