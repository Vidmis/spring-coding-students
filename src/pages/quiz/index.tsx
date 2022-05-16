import React, { useState, useEffect } from "react";
import { ContentWrapper } from "components";
import { useAppDispatch, useAppSelector } from "state/hooks";
import { fetchQuestionsActions } from "state/sagasActions";
import { IAnswerOptions, IQuestionsData } from "state/types";
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
  const [currentQuestion, setCurrentQuestion] = useState(0);
  let nextQuestion = 1;
  const [score, setScore] = useState(0);
  const dispatch = useAppDispatch();
  const quizQA = useAppSelector(
    ({ question }) => question.questionsData
  ) as IQuestionsData[];

  useEffect(() => {
    dispatch(fetchQuestionsActions());
  }, []);

  const handleSelectAnswer = (answer: string[]) => {
    if (selectedAnswer.includes(answer)) {
      setSelectedAnswer(selectedAnswer.filter((item) => item !== answer));
    } else {
      setSelectedAnswer([...selectedAnswer, answer]);
    }
  };

  console.log(selectedAnswer);
  console.log(nextQuestion);

  return (
    <>
      <ContentWrapper maxWidth='100%'>
        {quizQA[currentQuestion]?.questionText}
        <ul>
          {quizQA[currentQuestion]?.answerOptions.map(
            (answer: IAnswerOptions, index: number) => (
              <li
                onClick={() => handleSelectAnswer(answer.bikeTypes)}
                key={index}
              >
                {answer.answerText}
              </li>
            )
          )}
        </ul>
        <Button onClick={() => setCurrentQuestion(currentQuestion + 1)}>
          Next Question
        </Button>
      </ContentWrapper>
    </>
  );
};

export default Home;
