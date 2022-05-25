import { Box, Typography } from "components";
import React, { useState } from "react";
import {
  setAddToCart,
  setDeleteFromCart,
} from "state/features/userBikesCartSlice";

import { BIKE_SIZES } from "consts";
import { Button } from "components/atoms";
import styled from "styled-components/macro";
import { useAppDispatch } from "state/hooks";

interface BikeSpecificationsProps {
  id: string;
  bikeType: string;
  model: string;
  price: number;
}

const BikeSpecifications: React.FC<BikeSpecificationsProps> = ({
  id,
  bikeType,
  model,
  price,
}) => {
  const dispatch = useAppDispatch();
  const [bikeSize, setBikeSize] = useState<{ size: string | null }>({
    size: null,
  });

  const discountPrice = price + 100;

  const handleAddToCart = () => {
    dispatch(
      setAddToCart({
        id,
        bikeType,
        model,
        price,
        size: "",
      })
    );
  };
  const handleRemoveFromCart = () => {
    setBikeSize({ size: null });
    dispatch(setDeleteFromCart(id));
  };

  return (
    <SpecificationsWrapper>
      <Box className='header'>
        <Typography
          type='h2'
          mb={{ _: "s16" }}
          fontSize={{ _: "fs28", mdTablet: "fs48" }}
          fontWeight={{ _: "fw600" }}
          lineHeight={{ _: "mdMob", mdTablet: "md" }}
          color='dark'
        >
          {model.toUpperCase()}
        </Typography>
        <Box as='span' display='flex'>
          <Typography
            fontSize={{ _: "fs16", mdTablet: "fs24" }}
            mr='s32'
            color='gray'
          >
            BYKE TYPE
          </Typography>
          <Typography
            fontSize={{ _: "fs16", mdTablet: "fs24" }}
            fontWeight='fw700'
            color='gray'
          >
            {bikeType.toUpperCase()}
          </Typography>
        </Box>
      </Box>

      <Box
        className='priceContent'
        display={{ _: "flex", mdTablet: "block" }}
        justifyContent={{ _: "space-around" }}
        my={{ _: "s16", mdTablet: "s48" }}
      >
        <Typography
          fontSize={{ _: "fs28", mdTablet: "fs48" }}
          fontWeight={{ _: "fw400" }}
          lineHeight={{ _: "mdMob", mdTablet: "md" }}
          textDecoration='line-through'
          color='dark'
        >
          € {discountPrice}
        </Typography>
        <Typography
          fontSize={{ _: "fs36", mdTablet: "fs60" }}
          fontWeight={{ _: "fw700" }}
          lineHeight={{ _: "mdMob", mdTablet: "md" }}
          type='h3'
          color='primary'
        >
          € {price}
        </Typography>
      </Box>

      <Box className='chooseBike' mb='s48'>
        <Typography
          fontSize={{ _: "fs16", mdTablet: "fs18" }}
          fontWeight='fw600'
          color='gray'
          mb='s16'
        >
          CHOOSE BIKE SIZE
        </Typography>
        <Box display='flex'>
          {BIKE_SIZES.map((size) => (
            <Box
              key={size}
              mr='s24'
              onClick={() => setBikeSize({ ...bikeSize, size: size })}
            >
              {bikeSize.size === size ? (
                <Box
                  as='span'
                  backgroundColor='primaryHover'
                  color='white'
                  width='2rem'
                  height='2rem'
                  borderRadius='bFull'
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                >
                  <Typography
                    type='body18'
                    fontWeight='fw600'
                    className='bike-size'
                  >
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
                  <Typography
                    type='body18'
                    fontWeight='fw600'
                    className='bike-size'
                    color='dark'
                  >
                    {size.toUpperCase()}
                  </Typography>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        display='flex'
        justifyContent='space-between'
        maxWidth='18rem'
        alignItems='center'
        mt='s48'
      >
        {bikeSize.size ? (
          <Button
            variant='custom'
            width={{ _: "8rem", laptop: "10rem" }}
            height={{ _: "3rem" }}
            fontSize={{ _: "fs14", laptop: "fs16" }}
            color='white'
            backgroundColor='primary'
            onClick={handleAddToCart}
          >
            + ADD TO CART
          </Button>
        ) : (
          <Button
            variant='custom'
            width={{ _: "8rem", laptop: "10rem" }}
            height={{ _: "3rem" }}
            fontSize={{ _: "fs14", laptop: "fs16" }}
            color='dark'
            backgroundColor='lightGray'
            onClick={handleAddToCart}
            disabled={true}
          >
            + ADD TO CART
          </Button>
        )}
        <Button
          variant='custom'
          width={{ _: "7rem" }}
          height={{ _: "3rem" }}
          fontSize={{ _: "fs14" }}
          color='dark'
          backgroundColor='lightGray'
          onClick={handleRemoveFromCart}
        >
          - REMOVE
        </Button>
      </Box>
    </SpecificationsWrapper>
  );
};

export default BikeSpecifications;

const SpecificationsWrapper = styled(Box)`
  .bike-size {
    cursor: pointer;
  }
`;
