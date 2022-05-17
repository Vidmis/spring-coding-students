import React, { useState, useEffect } from "react";
import { Box, ContentWrapper, Typography } from "components";
import { useAppDispatch, useAppSelector } from "state/hooks";
import { fetchQuestionsActions } from "state/sagasActions";
import { IAnswerOptions, IQuestionsData } from "state/types";
import { Button } from "components/atoms";
import { navigate } from "gatsby";
import AnswerInputCard from "./layouts/AnswerInputCard";
import AnswerCard from "./layouts/AnswerInputCard";

//// npm i redux-persist --- skirtas saugoti reduxo state'a i local storage

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
  const step = useAppSelector(({ step }) => step.value);
  console.log(step);

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

  const onRenderStep = () => {
    switch (step) {
      case 0:
        return <AnswerCard quizQA={quizQA} />;
      case 1:
        return <AnswerInputCard quizQA={quizQA} />;
      case 2:
        return null;
    }
  };

  console.log(selectedAnswer);

  return (
    <>
      <ContentWrapper maxWidth='100%'>
        {onRenderStep(1)}
        {/* <Button onClick={() => setCurrentQuestion(currentQuestion + 1)}>
          Next Question
        </Button> */}
        {/* <Button onClick={() => navigate("/checkout")}>Next Question</Button> */}
      </ContentWrapper>
    </>
  );
};

export default Home;
