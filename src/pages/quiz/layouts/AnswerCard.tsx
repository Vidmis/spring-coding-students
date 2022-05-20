import React, { useState } from "react";
import { ContentWrapper } from "components";
import { useAppDispatch, useAppSelector } from "state/hooks";
import { IAnswerOptions, IQuestionsData } from "state/types";
import { Button } from "components/atoms";
import { navigate } from "gatsby";
import { selectStep, selectUserBikeTypes } from "state/selectors";
import useNavigation from "hooks/useNavigation";
import { setBikeTypes } from "state/features/userAnswersSlice";

interface IAnswerCard {
  quizQA: IQuestionsData[];
  isLastCard?: boolean;
  dataStep: number;
}

const AnswerCard: React.FC<IAnswerCard> = ({
  quizQA,
  isLastCard,
  dataStep,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<Array<string>>([]);
  const { onNextStep } = useNavigation();
  const dispatch = useAppDispatch();
  const answers = useAppSelector(selectUserBikeTypes);

  const handleSelectAnswer = (answer: Array<string>) => {
    console.log(answer);
    if (selectedAnswer.includes(answer)) {
      setSelectedAnswer(selectedAnswer.filter((item) => item !== answer));
    } else {
      setSelectedAnswer([...selectedAnswer, answer]);
    }
  };

  const handleNextStep = () => {
    dispatch(setBikeTypes([...answers, selectedAnswer]));
    setSelectedAnswer([]);
    !isLastCard ? onNextStep() : navigate("/checkout");
  };

  console.log(isLastCard);

  return (
    <>
      <ContentWrapper maxWidth='100%'>
        {quizQA[dataStep]?.questionText}
        <ul>
          {quizQA[dataStep]?.answerOptions.map(
            (answer: IAnswerOptions, index: number) => (
              <li
                onClick={() => handleSelectAnswer(answer.bikeType)}
                key={index}
              >
                {answer.answerText}
              </li>
            )
          )}
        </ul>
        <Button onClick={handleNextStep}>Submit</Button>
      </ContentWrapper>
    </>
  );
};

export default AnswerCard;
