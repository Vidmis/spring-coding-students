import React, { useState } from "react";
import styled from "styled-components/macro";
import { Box, ContentWrapper, Typography } from "components";
import { theme } from "styles/theme";
import { BIKE_SIZES } from "consts";
import { Button } from "components/atoms";
import { useAppDispatch } from "state/hooks";
import {
  setAddToCart,
  setDeleteFromCart,
} from "state/features/userBikesCartSlice";

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
  const [bikeSize, setBikeSize] = useState<{ size: string }>({
    size: "",
  });

  const discountPrice = price + 100;

  console.log(id);

  const handleAddToCart = () => {
    dispatch(
      setAddToCart({
        id,
        bikeType,
        model,
        price,
        size: "M",
      })
    );
  };
  const handleRemoveFromCart = () => {
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
          lineHeight={{ _: "mMob", mdTablet: "md" }}
          color='dark'
        >
          {model.toUpperCase()}
        </Typography>
        <Box display='flex'>
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
          lineHeight={{ _: "mMob", mdTablet: "md" }}
          textDecoration='line-through'
          color='dark'
        >
          € {discountPrice}
        </Typography>
        <Typography
          fontSize={{ _: "fs36", mdTablet: "fs60" }}
          fontWeight={{ _: "fw700" }}
          lineHeight={{ _: "mMob", mdTablet: "md" }}
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
            <Typography
              key={size}
              type='body18'
              fontWeight='fw600'
              mr='s24'
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
                  <Typography cursor='pointer' fontWeight='fw600'>
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
                  <Typography cursor='pointer' color='dark' fontWeight='fw600'>
                    {size.toUpperCase()}
                  </Typography>
                </Box>
              )}
            </Typography>
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

const SpecificationsWrapper = styled(Box)``;
