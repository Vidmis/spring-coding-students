import React, { useEffect } from "react";
import { ContentWrapper } from "components";
import { useAppDispatch } from "state/hooks";
import { fetchQuestionsActions } from "state/sagasActions";
import AnswerInputCard from "./layouts/AnswerInputCard";
import AnswerCard from "./layouts/AnswerCard";
import { useSelector } from "react-redux";
import { selectQuizQA, selectStep } from "state/selectors";
import { setBikeTypes } from "state/features/userAnswersSlice";
import AdviceCard from "./layouts/AdviceCard";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const quizQA = useSelector(selectQuizQA);
  const step = useSelector(selectStep);

  useEffect(() => {
    dispatch(setBikeTypes([]));
    dispatch(fetchQuestionsActions());
  }, []);

  const onRenderStep = () => {
    switch (step) {
      case 0:
        return <AnswerCard quizQA={quizQA} dataStep={step} />;
      case 1:
        return <AnswerInputCard quizQA={quizQA} dataStep={step} />;
      case 2:
        return <AdviceCard />;
      case 3:
        return <AnswerCard quizQA={quizQA} dataStep={step - 1} />;
      case 4:
        return (
          <AnswerCard quizQA={quizQA} isLastCard={true} dataStep={step - 1} />
        );
    }
  };

  return (
    <>
      <ContentWrapper maxWidth='100%'>{onRenderStep()}</ContentWrapper>
    </>
  );
};

export default Home;
