import React, {
  useState,
  useEffect,
  HTMLInputTypeAttribute,
  FormEvent,
} from "react";
import { Box, ContentWrapper, Typography } from "components";
import { useAppDispatch, useAppSelector } from "state/hooks";
import { IQuestionsData } from "state/types";
import { Button, Input } from "components/atoms";
import useNavigation from "hooks/useNavigation";

interface IAnswerInputCard {
  quizQA: IQuestionsData[];
}

const AnswerInputCard: React.FC<IAnswerInputCard> = ({ quizQA }) => {
  const [personHeight, setPersonHeight] = useState<string>("");
  const [isDisablet, setIsDisabled] = useState(true);
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

  const handleClick = () => {
    onNextStep();
  };

  console.log(personHeight);

  return (
    <>
      <ContentWrapper maxWidth='100%'>
        {!quizQA[1]?.answerOptions && (
          <Box>
            <Typography type='h5'>{quizQA[1]?.questionText}</Typography>
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
        {/* <Button onClick={() => setCurrentQuestion(currentQuestion + 1)}>
          Next Question
        </Button> */}
        <Button disabled={isDisablet} onClick={() => handleClick()}>
          Continue
        </Button>
      </ContentWrapper>
    </>
  );
};

export default AnswerInputCard;
