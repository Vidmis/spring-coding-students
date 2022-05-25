import { ContentWrapper, Typography } from "components";

import { Button } from "components/atoms";
import React from "react";
import { useNavigation } from "hooks";

interface AdviceCardProps {}

const AdviceCard: React.FC<AdviceCardProps> = () => {
  const { onNextStep } = useNavigation();

  return (
    <>
      <ContentWrapper display='flex' flexDirection='column' alignItems='center'>
        <Typography type='h4' color='dark' fontSize='fs48' mt={{ _: "s64" }}>
          Bike your way to better health.
        </Typography>
        <Typography type='body20' color='gray' mt={{ _: "s32" }}>
          A daily ride can help build strength, endurance, and bone density.
        </Typography>
        <Button
          variant='custom'
          color='white'
          backgroundColor='primary'
          fontSize='fs16'
          mt={{ _: "s64" }}
          width='10rem'
          height='3rem'
          onClick={onNextStep}
        >
          Continue
        </Button>
      </ContentWrapper>
    </>
  );
};

export default AdviceCard;
