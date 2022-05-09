import React from "react";

import { Box, SectionWrapper, Typography } from "components";
import { Foodies, Foods } from "state/types";

interface FoodiesExt extends Foodies {
  hateFood?: string; //NOTE: ? means optional
}

const FOODS: FoodiesExt[] = [
  {
    id: 1,
    name: "Viktorija",
    food: Foods.GRYBAI,
  },
  {
    id: 2,
    name: "Vidmis",
    food: Foods.BURGERIUKAI,
  },
  {
    id: 3,
    name: "Martyna",
    food: Foods.SALDUMYNAI,
  },
  {
    id: 4,
    name: "Nojus",
    food: Foods.CEPAI,
  },
];

const LearnRedux: React.FC = () => (
  <SectionWrapper backgroundColor='primary' minHeight='80vh'>
    <Box maxWidth='72rem'>
      <Typography type='h3' color='white' textAlign='center'>
        Mokomes redux
      </Typography>
      {FOODS.map(({ id, name, food }) => {
        return (
          <Box key={id} m='0 0 1rem 0'>
            <Typography
              color='white'
              fontSize='fs20'
              mb='s10'
              fontWeight='fw700'
            >
              {name}
            </Typography>
            <Typography color='white' fontSize='fs14' fontWeight='fw400'>
              {food}
            </Typography>
          </Box>
        );
      })}
    </Box>
  </SectionWrapper>
);

export default LearnRedux;
