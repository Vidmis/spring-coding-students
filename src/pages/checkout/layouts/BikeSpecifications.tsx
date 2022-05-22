import React, { useState } from "react";
import styled from "styled-components/macro";
import { Box, ContentWrapper, Typography } from "components";
import { theme } from "styles/theme";

interface BikeSpecificationsProps {
  bikeType: string;
  model: string;
  price: number;
}

const BikeSpecifications: React.FC<BikeSpecificationsProps> = ({
  bikeType,
  model,
  price,
}) => {
  const [bikeSize, setBikeSize] = useState();
  const [bikeColor, setBikeColor] = useState();
  const [addToCart, setAddToCart] = useState();

  return (
    <SpecificationsWrapper>
      <Typography type='h3' color='white'>
        {model}
      </Typography>
      <Typography type='body20'>{bikeType}</Typography>
      <Typography type='h3'>{price} €</Typography>
    </SpecificationsWrapper>
  );
};

export default BikeSpecifications;

const SpecificationsWrapper = styled(Box)``;
