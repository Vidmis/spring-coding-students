import React, { useState, useEffect } from "react";
import { ContentWrapper } from "components";
import { useAppDispatch, useAppSelector } from "state/hooks";
import { fetchQuestionsActions } from "state/sagasActions";
import { IQuestionsData } from "state/types";
import { Button } from "components/atoms";

{
  /* <input
        name="height"
        type="number"
        autocomplete="off"
        min="130"
        max="220"
      /> */
}

const QuizBox: React.FC = ({ children }) => {
  const [isSelected, setIsSelected] = useState();

  return <Button>{children}</Button>;
};

const Home: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const dispatch = useAppDispatch();
  const quizQA = useAppSelector(
    ({ question }) => question.questionsData
  ) as IQuestionsData[];

  useEffect(() => {
    dispatch(fetchQuestionsActions());
  }, []);

  const handleSelectAnswer = (answer: string) => {
    if (selectedAnswer.includes(answer)) {
      setSelectedAnswer(selectedAnswer.filter((answ) => answ !== answer));
    } else {
      setSelectedAnswer([...selectedAnswer, answer]);
    }
  };

  console.log("selectedAnswer", selectedAnswer);

  return (
    <>
      <ContentWrapper maxWidth='100%'>
        {quizQA[2]?.questionText}
        {quizQA[2]?.answerOptions.map((answer: string, index: number) => (
          <Button
            onClick={() => handleSelectAnswer(answer)}
            key={index + answer.slice(0, 2)}
          >
            {answer}
          </Button>
        ))}
      </ContentWrapper>
    </>
  );
};

export default Home;
