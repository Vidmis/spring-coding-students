import { Box, ContentWrapper, Typography } from "components";
import React, { ReactNode, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "state/hooks";

import { Button } from "components/atoms";
import { Colors } from "styles/theme";
import { IQuestionsData } from "state/types";
import { fetchQuestionsActions } from "state/sagasActions";
import { navigate } from "gatsby";
import { selectUserBikeTypes } from "state/selectors";
import { setBikeTypes } from "state/features/userAnswersSlice";
import styled from "styled-components/macro";
import { useNavigation } from "hooks";

interface IAnswerLayout {
  quizQA: IQuestionsData[];
  step: number;
}
interface IAnswerCard {
  children: ReactNode;
  color?: Colors;
}

const AnswerCard: React.FC<IAnswerCard> = ({ children, color }) => (
  <Typography
    fontSize={{ _: "fs18", mdTablet: "fs20" }}
    lineHeight={{ _: "smMob", mdTablet: "smMob" }}
    fontWeight={{ _: "fw700", mdTablet: "fw600" }}
    py='s10'
    px='s10'
    backgroundColor='white'
    textAlign='center'
    color='dark'
    borderRadius='b8'
    border='1px solid'
    borderColor={color ? color : "gray"}
  >
    {children}
  </Typography>
);

const AnswerLayout: React.FC<IAnswerLayout> = ({ quizQA, step }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const { onNextStep } = useNavigation();
  const dispatch = useAppDispatch();
  const answers = useAppSelector(selectUserBikeTypes);

  useEffect(() => {
    dispatch(fetchQuestionsActions());
  }, []);

  const handleSelectAnswer = (answer: string) => {
    if (selectedAnswer.includes(answer)) {
      setSelectedAnswer(selectedAnswer.filter((item) => item !== answer));
    } else if (quizQA[step]?.answerOptions.length <= 2) {
      setSelectedAnswer([answer]);
    } else {
      setSelectedAnswer([...selectedAnswer, answer]);
    }
    console.log(answer);
  };

  useEffect(() => {
    if (selectedAnswer.length === 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [selectedAnswer]);

  const handleNextStep = () => {
    dispatch(setBikeTypes([...answers, selectedAnswer]));
    setSelectedAnswer([]);
    setIsDisabled(true);
    if (step >= quizQA?.length - 1) {
      navigate("/checkout");
    } else {
      onNextStep();
    }
  };

  return (
    <AnswerLayoutStyled>
      <ContentWrapper
        maxWidth='100%'
        m={{ _: "s24", mdTablet: "s16" }}
        display='flex'
        flexDirection='column'
        alignItems='center'
      >
        <Box mb={{ _: "s48", mdTablet: "s64" }}>
          <Typography
            fontSize={{ _: "fs28", mdTablet: "fs32" }}
            lineHeight={{ _: "mdMob", mdTablet: "xl" }}
            fontWeight={{ _: "fw700", mdTablet: "fw600" }}
            color='dark'
          >
            {quizQA[step]?.questionText}
          </Typography>
        </Box>
        <Box>
          {quizQA[step]?.answerOptions.map(
            ({ bikeType, answerText }, index: number) => (
              <Box
                className='answers'
                as='li'
                onClick={() => handleSelectAnswer(bikeType.join(" "))}
                key={index}
                minWidth='18rem'
                maxWidth='24rem'
                my={{ _: "s10" }}
              >
                {selectedAnswer.includes(bikeType.join(" ")) ? (
                  <AnswerCard color='primary'>{answerText}</AnswerCard>
                ) : (
                  <AnswerCard>{answerText}</AnswerCard>
                )}
              </Box>
            )
          )}
        </Box>
        <Box mt={{ _: "s48" }}>
          {!isDisabled ? (
            <Button
              variant='custom'
              color='white'
              backgroundColor='primary'
              fontSize='fs16'
              width='10rem'
              height='3rem'
              onClick={handleNextStep}
            >
              Continue
            </Button>
          ) : (
            <Button
              variant='custom'
              color='dark'
              backgroundColor='white'
              fontSize='fs16'
              width='10rem'
              height='3rem'
              onClick={handleNextStep}
              disabled={isDisabled}
            >
              Continue
            </Button>
          )}
        </Box>
      </ContentWrapper>
    </AnswerLayoutStyled>
  );
};

export default AnswerLayout;

const AnswerLayoutStyled = styled(Box)`
  .answers {
    cursor: pointer;
  }
`;
