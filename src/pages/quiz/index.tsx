import { ContentWrapper, SectionWrapper, Typography } from "components";
import React, { useEffect } from "react";
import { selectQuizQA, selectStep } from "state/selectors";

import AdviceCard from "./layouts/AdviceCard";
import AnswerLayout from "./layouts/AnswerLayout";
import { IQuestionsData } from "state/types";
import { fetchQuestionsActions } from "state/sagasActions";
import { navigate } from "gatsby";
import { setBikeTypes } from "state/features/userAnswersSlice";
import { useAppDispatch } from "state/hooks";
import { useSelector } from "react-redux";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const quizQA: IQuestionsData[] = useSelector(selectQuizQA);
  const step = useSelector(selectStep);

  useEffect(() => {
    dispatch(setBikeTypes([]));
    dispatch(fetchQuestionsActions());
  }, []);

  const onRenderStep = (cardType: string) => {
    console.log(quizQA.length);
    console.log(step + 1);

    switch (cardType) {
      case "singleAnswer":
        return <AnswerLayout quizQA={quizQA} step={step} />;
      case "multiAnswer":
        return <AnswerLayout quizQA={quizQA} step={step} />;
      case "advice":
        return <AdviceCard quizQA={quizQA} step={step} />;
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

          {onRenderStep(quizQA[step]?.questionType)}
        </SectionWrapper>
      </ContentWrapper>
    </>
  );
};

export default Home;
