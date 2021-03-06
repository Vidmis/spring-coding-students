import { Box, ContentWrapper, Typography } from "components";
import React, { ReactNode, useEffect, useState } from "react";
import { Theme, theme } from "styles/theme";
import { useAppDispatch, useAppSelector } from "state/hooks";

import { BorderProps } from "styled-system";
import { Button } from "components/atoms";
import { IQuestionsData } from "state/types";
import { navigate } from "gatsby";
import { selectUserBikeTypes } from "state/selectors";
import { setBikeTypes } from "state/features/userAnswersSlice";
import styled from "styled-components/macro";
import { useNavigation } from "hooks";

interface IAnswerLayout {
  quizQA: IQuestionsData[];
  isLastCard?: boolean;
  step: number;
}
interface IAnswerCard {
  children: ReactNode;
  border?: BorderProps<Theme>;
}

const AnswerCard: React.FC<IAnswerCard> = ({ children, border }) => (
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
    border={border ? border : "unset"}
  >
    {children}
  </Typography>
);

const AnswerLayout: React.FC<IAnswerLayout> = ({ quizQA, step }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<Array<string>>([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const { onNextStep, selectStep } = useNavigation();
  const dispatch = useAppDispatch();
  const answers = useAppSelector(selectUserBikeTypes);

  const handleSelectAnswer = (answer: Array<string>) => {
    if (selectedAnswer.includes(answer)) {
      setSelectedAnswer(selectedAnswer.filter((item) => item !== answer));
    } else if (quizQA[step]?.answerOptions.length <= 2) {
      setSelectedAnswer([answer]);
    } else {
      setSelectedAnswer([...selectedAnswer, answer]);
    }
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
      selectStep(0);
    } else {
      onNextStep();
    }
  };

  return (
    <AnswerLayoutStyled>
      <ContentWrapper
        maxWidth='100%'
        m={{ _: "s24", mdTablet: "s64" }}
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
                onClick={() => handleSelectAnswer(bikeType)}
                key={index}
                minWidth='18rem'
                maxWidth='24rem'
                my={{ _: "s10" }}
              >
                {selectedAnswer.includes(bikeType) ? (
                  <AnswerCard border={theme.borders.b_primary}>
                    {answerText}
                  </AnswerCard>
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
