import React, { useState } from "react";
import { Typography } from "components/typography/Typography";
import { SectionWrapper } from "components/wrappers/SectionWrapper";
import { RECIPES_LIST } from "consts";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import { Box } from "components";
import { Image } from "components/Image";
import { RecipesGridStyled } from "./RecipesGridStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClockFour,
  faHeart,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "components";
import { GridWrapper } from "components";

interface IRecipesGridProps {
  title: string;
  image: string;
  time: string;
  foodType: string;
}

const RecipesGridList: React.FC<IRecipesGridProps> = ({
  title,
  image,
  time,
  foodType,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <RecipesGridStyled
      isSelected={isSelected}
      onClick={() => setIsSelected(!isSelected)}
    >
      <Box className='heartIco'>
        <FontAwesomeIcon icon={faHeart} />
      </Box>
      <Container justifyContent='space-between' width='256px'>
        <Image src={image} alt={title} />
        <Typography
          type='h6'
          fontSize='fs16'
          lineHeight='lh'
          fontWeight='fw500'
          py='s10'
        >
          {title}
        </Typography>
        <FlexWrapper>
          <Box
            width='8rem'
            height='2.5rem'
            display='flex'
            justifyContent='left'
            alignItems='center'
            p='s10'
            fontSize='fs12'
          >
            <FontAwesomeIcon icon={faClockFour} />
            <span>{time}</span>
          </Box>

          <Box
            width='8rem'
            height='2.5rem'
            display='flex'
            justifyContent='left'
            alignItems='center'
            p='s10'
            fontSize='fs12'
          >
            <FontAwesomeIcon icon={faUtensils} />
            <span>{foodType}</span>
          </Box>
        </FlexWrapper>
      </Container>
    </RecipesGridStyled>
  );
};

export const RecipesGrid: React.FC = () => {
  return (
    <SectionWrapper px='s0' py='s10' textAlign='center'>
      <Typography type='h6' mb='s32'>
        Simple and tasty recipes
      </Typography>
      <Typography color='grey' maxWidth='38rem' m='auto'>
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
      </Typography>
      <Box as='ul' px='s0' my='s32'>
        <GridWrapper
          p='s48'
          maxWidth='80rem'
          gridTemplateColumns='repeat(auto-fit, 18rem)'
          justifyContent='center'
          gridGap='1rem'
        >
          <Box
            className='ad_image'
            gridColumn={{ _: "1", ltablet: "3" }}
            gridRow='2'
            gridTemplateColumns={{ _: "0", ltablet: "3" }}
          >
            <Image src='adImg' alt='adImg' width='18rem' />
          </Box>
          {RECIPES_LIST.map(({ image, title, time, foodType }, index) => (
            <RecipesGridList
              key={title + index}
              title={title}
              image={image}
              time={time}
              foodType={foodType}
            />
          ))}
        </GridWrapper>
      </Box>
    </SectionWrapper>
  );
};
