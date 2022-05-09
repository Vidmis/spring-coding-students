import React from "react";
import { Typography } from "components/typography/Typography";
import { SectionWrapper } from "components/wrappers/SectionWrapper";
import { CATEGORIES_LIST } from "consts";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import { Box } from "components";
import { Image } from "components/Image";
import { CategoriesStyled } from "./CategoriesStyled";

interface ICategoryListProps {
  title: string;
  image: string;
  color: string;
}

const CategoryList: React.FC<ICategoryListProps> = ({
  title,
  image,
  color,
}) => (
  <CategoriesStyled bgColor={color}>
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='space-between'
    >
      <Image src={image} alt={title} width='60px' />
      <span>{title}</span>
    </Box>
  </CategoriesStyled>
);

export const Categories: React.FC = () => (
  <SectionWrapper px='s0' py='s10'>
    <Typography type='h6'>Categories</Typography>
    <Box as='ul' px='s0' my='s32'>
      <FlexWrapper justifyContent='space-between' flexWrap='wrap'>
        {CATEGORIES_LIST.map(({ image, title, color }, index) => (
          <CategoryList
            key={title + index}
            title={title}
            image={image}
            color={color}
          />
        ))}
      </FlexWrapper>
    </Box>
  </SectionWrapper>
);
