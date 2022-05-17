import React, { useState, useEffect } from "react";
import { ContentWrapper } from "components";
import { useAppDispatch, useAppSelector } from "state/hooks";
import { fetchQuestionsActions } from "state/sagasActions";
import { IAnswerOptions, IQuestionsData } from "state/types";
import { Button } from "components/atoms";
import { navigate } from "gatsby";

const QuizBox: React.FC = ({ children }) => {
  const [isSelected, setIsSelected] = useState();

  return <Button>{children}</Button>;
};

const Home: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
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
        {/* <Button onClick={() => setCurrentQuestion(currentQuestion + 1)}>
          Next Question
        </Button> */}
        <Button onClick={() => navigate("/checkout")}>Next Question</Button>
      </ContentWrapper>
    </>
  );
};

export default Home;
