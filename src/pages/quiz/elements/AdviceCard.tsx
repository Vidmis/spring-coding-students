import { ContentWrapper, Typography } from "components";

import { Button } from "components/atoms";
import { IQuestionsData } from "state/types";
import React from "react";
import { navigate } from "gatsby";
import { useNavigation } from "hooks";

interface AdviceCardProps {
  step: number;
  quizQA: IQuestionsData[];
}

const AdviceCard: React.FC<AdviceCardProps> = ({ quizQA, step }) => {
  const { onNextStep } = useNavigation();

  const handleOnClick = () => {
    if (step >= quizQA?.length - 1) {
      navigate("/checkout");
    } else {
      onNextStep();
    }
  };

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
          onClick={handleOnClick}
        >
          Continue
        </Button>
      </ContentWrapper>
    </>
  );
};

export default AdviceCard;
