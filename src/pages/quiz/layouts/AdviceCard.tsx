import { Typography } from "components";
import { Button } from "components/atoms";
import useNavigation from "hooks/useNavigation";
import React from "react";

interface AdviceCardProps {}

const AdviceCard: React.FC<AdviceCardProps> = () => {
  const { onNextStep } = useNavigation();

  return (
    <>
      <Typography>Yo advice</Typography>
      <Button onClick={onNextStep}>Next</Button>
    </>
  );
};

export default AdviceCard;
