import {
  Box,
  ContentWrapper,
  Image,
  SectionWrapper,
  Typography,
} from "components";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "state/hooks";
import { fetchBikesActions } from "state/sagasActions";
import { selectBikes, selectUserBikeTypes } from "state/selectors";
import styled from "styled-components/macro";
import { theme } from "styles/theme";
import Carousel from "./sections/carousel/Carousel";

// interface IBikeBox {
//   url: string;
//   bikeType: string;
// }

// const BikeBox: React.FC<IBikeBox> = ({ url, bikeType }) => {
//   const [isSelected, setIsSelected] = useState(false);

//   return (
//     <Box onClick={() => setIsSelected(!isSelected)}>
//       <Typography>{bikeType}</Typography>
//       <Image srcUrl={url} alt={bikeType} width='20rem' />
//     </Box>
//   );
// };

const Checkout: React.FC = () => {
  // const dispatch = useAppDispatch();
  // const answers = useAppSelector(selectUserBikeTypes);
  // const bikesData = useAppSelector(selectBikes);

  // console.log("bikesData", bikesData);

  // useEffect(() => {
  //   dispatch(fetchBikesActions());
  // }, []);

  // const sortedBikes = answers.flat(2).reduce((bikeMatch, bike) => {
  //   bikeMatch[bike] = (bikeMatch[bike] || 0) + 1;
  //   return bikeMatch;
  // }, {});

  // const matchingBikes = Object.keys(sortedBikes).filter(
  //   (bike) =>
  //     sortedBikes[bike] === Math.max.apply(null, Object.values(sortedBikes))
  // );

  return (
    <Box position='relative' overflow='hidden' height='100vh'>
      <Box p='s16' mt='s16' ml='s32'>
        <Typography type='link' fontWeight='fw600' color='white'>
          KILO.RIDE
        </Typography>
      </Box>
      <Carousel />
      <StyledCheckout>
        <Box
          className='layer'
          position='absolute'
          backgroundColor='primary'
          minWidth='96rem'
          height='200rem'
          maxWidth='100%'
        ></Box>
      </StyledCheckout>
    </Box>
  );
};

export default Checkout;

const StyledCheckout = styled(Box)`
  .layer {
    transform: rotate(351deg);
    top: 0;
    box-shadow: -10px 0px 50px ${theme.colors.gray};
    left: -42.8rem;
    z-index: -10;

    .specs {
      transform: rotate(-19deg);
    }
  }
`;
