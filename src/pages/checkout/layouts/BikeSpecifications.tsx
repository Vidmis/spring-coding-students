import React, { useState } from "react";
import styled from "styled-components/macro";
import { Box, ContentWrapper, Typography } from "components";
import { theme } from "styles/theme";
import { BIKE_SIZES } from "consts";
import { Button } from "components/atoms";

interface BikeSpecificationsProps {
  bikeType: string;
  model: string;
  price: string;
}

const BikeSpecifications: React.FC<BikeSpecificationsProps> = ({
  bikeType,
  model,
  price,
}) => {
  const [bikeSize, setBikeSize] = useState<{ size: string }>({
    size: "",
  });
  const [bikeColor, setBikeColor] = useState();
  const [addToCart, setAddToCart] = useState();
  const discountPrice = parseInt(price) + 100;

  console.log(bikeSize);

  return (
    <SpecificationsWrapper>
      <Box className='header' mb='s64'>
        <Typography type='h3' color='dark'>
          {model.toUpperCase()}
        </Typography>
        <Box display='flex'>
          <Typography type='body20' mr='s32' color='gray'>
            BYKE TYPE
          </Typography>
          <Typography type='body20' fontWeight='fw700' color='gray'>
            {bikeType.toUpperCase()}
          </Typography>
        </Box>
      </Box>

      <Box className='priceContent' mb='s48'>
        <Typography
          type='h6'
          fontWeight='fw400'
          textDecoration='line-through'
          color='dark'
        >
          € {discountPrice}
        </Typography>
        <Typography type='h3' color='primary'>
          € {price}
        </Typography>
      </Box>

      <Box className='chooseBike' mb='s48'>
        <Typography type='body18' fontWeight='fw600' color='gray' mb='s16'>
          CHOOSE BIKE SIZE
        </Typography>
        <Box display='flex'>
          {BIKE_SIZES.map((size) => (
            <Typography
              key={size}
              type='body18'
              fontWeight='fw600'
              mr='s32'
              onClick={() => setBikeSize({ ...bikeSize, size: size })}
            >
              {bikeSize.size === size ? (
                <Box
                  backgroundColor='primaryHover'
                  color='white'
                  width='2rem'
                  height='2rem'
                  borderRadius='bFull'
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                >
                  <Typography cursor='pointer' fontWeight='600'>
                    {size.toUpperCase()}
                  </Typography>
                </Box>
              ) : (
                <Box
                  width='2rem'
                  height='2rem'
                  borderRadius='bFull'
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                >
                  <Typography cursor='pointer' color='dark' fontWeight='600'>
                    {size.toUpperCase()}
                  </Typography>
                </Box>
              )}
            </Typography>
          ))}
        </Box>
      </Box>

      <Button variant='primary' mt='s48'>
        + ADD TO CARD
      </Button>
    </SpecificationsWrapper>
  );
};

export default BikeSpecifications;

const SpecificationsWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 90vh;
  justify-content: center;
`;
