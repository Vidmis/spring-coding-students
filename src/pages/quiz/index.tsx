import { ContentWrapper, SectionWrapper, Typography } from "components";
import React, { useEffect } from "react";
import { selectQuizQA, selectStep } from "state/selectors";

import AdviceCard from "./layouts/AdviceCard";
import AnswerLayout from "./layouts/AnswerLayout";
import { fetchQuestionsActions } from "state/sagasActions";
import { navigate } from "gatsby";
import { setBikeTypes } from "state/features/userAnswersSlice";
import { useAppDispatch } from "state/hooks";
import { useSelector } from "react-redux";

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
        return <AnswerLayout quizQA={quizQA} dataStep={step} />;
      case 1:
        return <AnswerLayout quizQA={quizQA} dataStep={step} />;
      case 2:
        return <AdviceCard />;
      case 3:
        return <AnswerLayout quizQA={quizQA} dataStep={step - 1} />;
      case 4:
        return (
          <AnswerLayout quizQA={quizQA} isLastCard={true} dataStep={step - 1} />
        );
    }
  };

  return (
    <>
      <ContentWrapper
        maxWidth='100%'
        height='100vh'
        backgroundColor='lightGray'
      >
        <SectionWrapper p={{ _: "s24", mdTablet: "s64" }}>
          <Typography
            className='logo'
            type='link'
            m={{ _: "s24", mdTablet: "s64" }}
            fontWeight={{ _: "fw600" }}
            color='primary'
            onClick={() => navigate("/")}
          >
            KILO.RIDE
          </Typography>

          {onRenderStep()}
        </SectionWrapper>
      </ContentWrapper>
    </>
  );
};

export default Home;
