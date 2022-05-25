import { Box, ContentWrapper, Typography } from "components";
import { Button, Input } from "components/atoms";
import React, { FormEvent, useState } from "react";

import { IQuestionsData } from "state/types";
import { setUserHeight } from "state/features/userAnswersSlice";
import { useAppDispatch } from "state/hooks";
import { useNavigation } from "hooks";

interface IAnswerInputCard {
  quizQA: IQuestionsData[];
  dataStep: number;
}

const AnswerInputCard: React.FC<IAnswerInputCard> = ({ quizQA, dataStep }) => {
  const [personHeight, setPersonHeight] = useState<string>("");
  const [isDisablet, setIsDisabled] = useState(true);
  const dispatch = useAppDispatch();
  const { onNextStep } = useNavigation();

  const handleChange = (
    e: FormEvent<HTMLDivElement> | FormEvent<HTMLInputElement>
  ) => {
    const target = e.target as HTMLInputElement;
    setPersonHeight(target.value);

    if (target.value) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handleNextStep = () => {
    dispatch(setUserHeight(personHeight));
    onNextStep();
  };

  return (
    <>
      <ContentWrapper maxWidth='100%'>
        {!quizQA[dataStep]?.answerOptions && (
          <Box>
            <Typography type='h5'>{quizQA[dataStep]?.questionText}</Typography>
            <Input
              name='height'
              type='number'
              autocomplete='off'
              min='130'
              max='220'
              value={personHeight}
              onChange={(e) => handleChange(e)}
            />
          </Box>
        )}
        <Button disabled={isDisablet} onClick={handleNextStep}>
          Continue
        </Button>
      </ContentWrapper>
    </>
  );
};

export default AnswerInputCard;
